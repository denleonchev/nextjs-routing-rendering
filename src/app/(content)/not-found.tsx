import styles from "@/app/(content)/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>Not Found!</h1>
      <p>The requested resource could not be found!</p>
    </div>
  );
}
