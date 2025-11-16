"use client";
import { useColors } from "@/hooks/useColors";
import ColorBox from "./ColorBox";
import styles from "../app/page.module.css";

export default function RgbBoxes() {
  const { targetColors, playerColors } = useColors();
  return (
    <>
      <div className={styles.colorBoxesContainer}>
        <ColorBox
          redValue={playerColors.red}
          greenValue={playerColors.green}
          blueValue={playerColors.blue}
          classTag="playerBox"
        />
        <ColorBox
          redValue={targetColors.red}
          greenValue={targetColors.green}
          blueValue={targetColors.blue}
          classTag="targetBox"
        />
      </div>
    </>
  );
}
