"use client";
import styles from "../app/page.module.css";

export default function ColorInput({ val, func, headerText }) {
  return (
    <>
      <div className={styles.colorHeader}>
        <p>{headerText}</p>
        <p>{val}</p>
      </div>
      <input
        name="red"
        type="range"
        min={0}
        max={255}
        defaultValue={val}
        onChange={(e) => func(e.target.value)}
      />
    </>
  );
}
