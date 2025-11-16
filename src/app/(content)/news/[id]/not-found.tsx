import styles from "@/app/(content)/news/[id]/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested article.</p>
    </div>
  );
}
