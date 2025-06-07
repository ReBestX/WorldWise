import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${
        type === "primary"
          ? styles.primary
          : type === "back"
          ? styles.back
          : type === "position"
          ? styles.position
          : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
