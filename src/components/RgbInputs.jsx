"use client";
import { useColors } from "@/hooks/useColors";
import styles from "../app/page.module.css";
import ColorInput from "./ColorInput";
import { calculateResultPercentage } from "@/utils/calculator";

export default function RgbInputs() {
  const {
    redValue,
    greenValue,
    blueValue,
    setRedValue,
    setGreenValue,
    setBlueValue,
    targetColors,
    setCurrrentPercentage,
  } = useColors();

  function handleResult() {
    const playerColors = {
      red: redValue,
      green: greenValue,
      blue: blueValue,
    };
    const perc = calculateResultPercentage(targetColors, playerColors);
    setCurrrentPercentage(perc);
  }

  return (
    <>
      <div className={styles.colorValuesContainer}>
        <ColorInput val={redValue} func={setRedValue} headerText={"red"} />
        <ColorInput
          val={greenValue}
          func={setGreenValue}
          headerText={"green"}
        />
        <ColorInput val={blueValue} func={setBlueValue} headerText={"blue"} />
        <button onClick={() => handleResult()}>Let's See</button>
      </div>
    </>
  );
}
