"use client";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export default function ColorInput({ val, func, color }) {
  const [colorValue, setColorValue] = useState(val);

  useEffect(() => {
    setColorValue(val);
  }, [val]);

  return (
    <>
      <div className={styles.colorHeader}>
        <p>{color}</p>
        <p>{colorValue}</p>
      </div>
      <input
        name="red"
        type="range"
        min={0}
        max={255}
        defaultValue={colorValue}
        onChange={(e) => func((prev) => ({ ...prev, [color]: e.target.value }))}
      />
    </>
  );
}
