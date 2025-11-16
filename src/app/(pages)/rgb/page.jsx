"use client";
import { createContext, useEffect, useState } from "react";
import RgbInputs from "../../../components/RgbInputs";
import { randomNum } from "@/utils/helper";
import RgbBoxes from "@/components/RgbBoxes";
import styles from "./rgb.module.css";

export const RgbContext = createContext();

export default function Rgb() {
  const [playerColors, setPlayerColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const [targetColors, setTargetColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const [currrentPercentage, setCurrrentPercentage] = useState(0);
  const [colorNumber, setColorNumber] = useState(1);
  const [scoreAverage, setScoreAverage] = useState(0);

  useEffect(() => {
    const red = randomNum(0, 255);
    const green = randomNum(0, 255);
    const blue = randomNum(0, 255);
    setTargetColors({ red, green, blue });
  }, [colorNumber]);

  return (
    <RgbContext.Provider
      value={{
        targetColors,
        currrentPercentage,
        setCurrrentPercentage,
        playerColors,
        setPlayerColors,
        colorNumber,
        setColorNumber,
        scoreAverage,
        setScoreAverage,
      }}
    >
      <div className={styles.container}>
        {/* TopAppBar */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <span className="material-symbols-outlined" style={{ color: '#9ca3af' }}>
              arrow_back
            </span>
          </div>
          <h1 className={styles.headerTitle}>Color Guess</h1>
          <div className={styles.headerSpacer}></div>
        </div>

        <main className={styles.main}>
          {/* Stats Section */}
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Round</p>
              <p className={styles.statValue}>{colorNumber} / 10</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Avg. Score</p>
              <p className={styles.statValue}>{Math.floor(scoreAverage)}%</p>
            </div>
          </div>

          {/* Color Comparison Section */}
          <RgbBoxes />

          {/* Sliders Section */}
          <RgbInputs />

          <div className={styles.spacer}></div>
        </main>
      </div>
    </RgbContext.Provider>
  );
}
