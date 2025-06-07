import { useContext } from "react";
import { CityContext } from "../context/CityContext";

export function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CityProvider");
  return context;
}
