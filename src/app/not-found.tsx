import styles from "@/app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>Not Found!</h1>
      <p>The requested resource could not be found!</p>
    </div>
  );
}
