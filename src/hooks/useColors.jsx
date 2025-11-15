import { RgbContext } from "@/app/(pages)/rgb/page";
import { useContext } from "react";

export function useColors() {
  const context = useContext(RgbContext);
  if (!context) throw new Error("useColors must be used within ThemeProvider");
  return context;
}
