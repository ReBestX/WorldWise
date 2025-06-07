// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition.jsx";
import Spinner from "./Spinner";
import Message from "./Message";
import { convertToEmoji } from "../utils/helpers.js";
import { useCities } from "../hooks/useCities.jsx";

function Form() {
  const navigate = useNavigate();
  const { createCity } = useCities();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState("");
  const [isLoadingGeoLocation, setIsLoadingGeoLocation] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState("");
  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeoLocation(true);
        setGeoCodingError("");

        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        if (!res.ok) throw new Error("Failed to fetch city data");

        const data = await res.json();

        if (!data.countryCode)
          throw new Error("No city found. Click somewhere else.");

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        console.error("Error fetching city data:", error);
        setGeoCodingError(error.message);
      } finally {
        setIsLoadingGeoLocation(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date || !lat || !lng) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
      id: Math.random().toString(36).substring(2, 15),
    };

    createCity(newCity);
    navigate("/app/cities");
  }

  // Conditionally render spinner or error message
  if (isLoadingGeoLocation) return <Spinner />;
  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          required
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission
            navigate("/app/cities");
          }}
        >
          Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
