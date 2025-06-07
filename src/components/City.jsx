import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import Button from "./Button";
import { useEffect } from "react";
import { useCities } from "../hooks/useCities";
import Spinner from "./Spinner";

// Using a safer approach for date formatting
const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  });
};

function City() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, getCity, currentCity, deleteCity } = useCities();

  useEffect(() => {
    if (!id) return;
    getCity(id);
  }, [id, getCity]);

  if (isLoading) return <Spinner />;

  if (!currentCity) return <p>City not found</p>;

  const { cityName, emoji, date, notes } = currentCity;

  function handleDelete() {
    deleteCity(id);
    navigate("/app/cities");
  }

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div className={styles.buttons}>
        <Button type="back" onClick={() => navigate("/app/cities")}>
          Back
        </Button>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default City;
