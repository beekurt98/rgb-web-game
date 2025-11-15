"use client";
import { createContext, useEffect, useState } from "react";
import RgbInputs from "../../../components/RgbInputs";
import { randomNum } from "@/utils/helper";
import RgbBoxes from "@/components/RgbBoxes";

export const RgbContext = createContext();

export default function Rgb() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [targetColors, setTargetColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const [currrentPercentage, setCurrrentPercentage] = useState(0);

  useEffect(() => {
    const red = randomNum(0, 255);
    const green = randomNum(0, 255);
    const blue = randomNum(0, 255);
    setTargetColors({ red, green, blue });
    console.log(targetColors);
  }, []);

  return (
    <RgbContext.Provider
      value={{
        redValue,
        greenValue,
        blueValue,
        setRedValue,
        setGreenValue,
        setBlueValue,
        targetColors,
        currrentPercentage,
        setCurrrentPercentage,
      }}
    >
      <RgbInputs />
      <RgbBoxes />
      <p>
        rgb {targetColors.red}, {targetColors.green}, {targetColors.blue}
      </p>
      <p>{currrentPercentage}</p>
    </RgbContext.Provider>
  );
}
