"use client";
import styles from "../app/page.module.css";

export default function ColorBox({
  redValue,
  greenValue,
  blueValue,
  classTag,
}) {
  return (
    <div
      className={styles[classTag]}
      style={{
        backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
      }}
    ></div>
  );
}
