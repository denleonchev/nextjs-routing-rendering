"use client";

import styles from "@/app/archive/@archive/[[...filter]]/error.module.css";

export default function ArchiveFilterError() {
  return (
    <div className={styles.error}>
      <h1>Articles were not found!</h1>
      <p>Please change the filter and try again</p>
    </div>
  );
}
