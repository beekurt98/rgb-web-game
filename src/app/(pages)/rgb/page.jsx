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
  const [colorNumber, setColorNumber] = useState(0);
  const [scoreAverage, setScoreAverage] = useState(0);

  useEffect(() => {
    const red = randomNum(0, 255);
    const green = randomNum(0, 255);
    const blue = randomNum(0, 255);
    setTargetColors({ red, green, blue });
    console.log(targetColors);
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
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <p>B</p>
          <h1>RGB</h1>
          <p>S</p>
        </div>
        <div className={styles.roundInfo}>
          <div>
            <p>Round</p>
            <p>{colorNumber}</p>
          </div>
          <div>
            <p>Avg Score</p>
            <p>{Math.floor(scoreAverage)}</p>
          </div>
        </div>
        <RgbBoxes />
        <RgbInputs />
        <p>
          rgb {targetColors.red}, {targetColors.green}, {targetColors.blue}
        </p>
        <p>{currrentPercentage}</p>
      </main>
    </RgbContext.Provider>
  );
}
