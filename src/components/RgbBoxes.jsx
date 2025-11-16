"use client";
import { useColors } from "@/hooks/useColors";
import ColorBox from "./ColorBox";
import styles from "../app/(pages)/rgb/rgb.module.css";

export default function RgbBoxes() {
  const { targetColors, playerColors } = useColors();
  return (
    <div className={styles.colorGrid}>
      <div className={styles.colorColumn}>
        <p className={styles.colorLabel}>Target</p>
        <ColorBox
          redValue={targetColors.red}
          greenValue={targetColors.green}
          blueValue={targetColors.blue}
        />
      </div>
      <div className={styles.colorColumn}>
        <p className={styles.colorLabel}>Your Guess</p>
        <ColorBox
          redValue={playerColors.red}
          greenValue={playerColors.green}
          blueValue={playerColors.blue}
        />
      </div>
    </div>
  );
}
