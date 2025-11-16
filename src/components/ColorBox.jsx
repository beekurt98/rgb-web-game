"use client";
import styles from "../app/(pages)/rgb/rgb.module.css";

export default function ColorBox({
  redValue,
  greenValue,
  blueValue,
}) {
  return (
    <div
      className={styles.colorBox}
      style={{
        backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
      }}
    ></div>
  );
}
