import { useCities } from "../hooks/useCities";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

// Format the date to be more readable
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

function CityItem({ city }) {
  const { currentCity, setMapPosition, deleteCity } = useCities();
  const { id, cityName, emoji, date, position } = city;

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity?.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        onClick={() => setMapPosition([position.lat, position.lng])}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
