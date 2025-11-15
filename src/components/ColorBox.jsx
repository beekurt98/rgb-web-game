"use client";
import styles from "../app/page.module.css";

export default function ColorBox({ redValue, greenValue, blueValue }) {
  return (
    <div
      className={styles.playerBox}
      style={{
        backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
      }}
    ></div>
  );
}
