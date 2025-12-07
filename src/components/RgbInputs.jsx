"use client";
import { useColors } from "@/hooks/useColors";
import styles from "../app/(pages)/rgb/rgb.module.css";
import ColorInput from "./ColorInput";
import { calculateResultPercentage } from "@/utils/calculator";

export default function RgbInputs() {
  const {
    targetColors,
    currrentPercentage,
    setCurrrentPercentage,
    playerColors,
    setPlayerColors,
    colorNumber,
    setColorNumber,
    scoreAverage,
    setScoreAverage,
  } = useColors();

  function handleResult() {
    const perc = calculateResultPercentage(targetColors, playerColors);
    setCurrrentPercentage(perc);
    resetGame(perc);
  }

  function resetGame(perc) {
    setColorNumber((prev) => prev + 1);
    const newColorNum = colorNumber + 1;
    const oldScoreAvg = scoreAverage;
    const newScoreAvg = (oldScoreAvg + perc) / (newColorNum - 1);
    setScoreAverage(newScoreAvg);
    setPlayerColors((prev) => ({ red: 0, green: 0, blue: 0 }));
  }

  return (
    <>
      <div className={styles.slidersSection}>
        <ColorInput
          val={playerColors.red}
          func={setPlayerColors}
          color={"red"}
        />
        <ColorInput
          val={playerColors.green}
          func={setPlayerColors}
          color={"green"}
        />
        <ColorInput
          val={playerColors.blue}
          func={setPlayerColors}
          color={"blue"}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.accuracySection}>
          <p className={styles.accuracyLabel}>Accuracy</p>
          <p className={styles.accuracyValue}>
            {Math.round(currrentPercentage)}%
          </p>
        </div>
        <button className={styles.submitButton} onClick={() => handleResult()}>
          Submit Guess
        </button>
      </div>
    </>
  );
}
