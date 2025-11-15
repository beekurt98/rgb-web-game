"use client";
import { useColors } from "@/hooks/useColors";
import ColorBox from "./ColorBox";
import styles from "../app/page.module.css";

export default function RgbBoxes() {
  const { targetColors, redValue, greenValue, blueValue } = useColors();
  return (
    <>
      <div className={styles.colorBoxesContainer}>
        <ColorBox
          redValue={redValue}
          greenValue={greenValue}
          blueValue={blueValue}
        />
        <ColorBox
          redValue={targetColors.red}
          greenValue={targetColors.green}
          blueValue={targetColors.blue}
        />
      </div>
    </>
  );
}
