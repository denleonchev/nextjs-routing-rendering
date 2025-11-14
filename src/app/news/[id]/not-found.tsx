import styles from "@/app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested article.</p>
    </div>
  );
}
