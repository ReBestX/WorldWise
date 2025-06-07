import styles from "./CountryItem.module.css";
import { Link } from "react-router-dom";

function CountryItem({ country }) {
  return (
    <li>
      <Link className={styles.countryItem}>
        <span className={styles.emoji}>{country.emoji}</span>
        <span className={styles.country}>{country.country}</span>
      </Link>
    </li>
  );
}

export default CountryItem;
