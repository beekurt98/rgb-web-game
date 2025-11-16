"use client";
import { useEffect, useState } from "react";
import styles from "./ColorInput.module.css";

export default function ColorInput({ val, func, color }) {
  const [colorValue, setColorValue] = useState(val);

  useEffect(() => {
    setColorValue(Number(val));
  }, [val]);

  const percentage = (colorValue / 255) * 100;
  const colorUpper = color.charAt(0).toUpperCase();

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div className={styles.labelRow}>
          <p className={`${styles.colorLabel} ${styles[color]}`}>{colorUpper}</p>
          <p className={styles.colorValue}>{Math.round(colorValue)}</p>
        </div>
        <div className={styles.trackWrapper}>
          <div className={`${styles.trackGradient} ${styles[color]}`}>
            <div className={styles.thumbContainer} style={{ width: `${percentage}%` }}>
              <div className={`${styles.thumb} ${styles[color]}`}></div>
            </div>
            <input
              className={styles.rangeInput}
              name={color}
              type="range"
              min={0}
              max={255}
              value={colorValue}
              onChange={(e) => func((prev) => ({ ...prev, [color]: Number(e.target.value) }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
