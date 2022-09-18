import { createContext } from "react";

export type CursorLookType = "default" | "slider-hover" | "slider-drag" | "text" | "link" | "hamburger"

export type CustomCursorType = {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
};

const CustomCursorContext = createContext<CustomCursorType>({
  type: "default",
  setType: () => {},
});

export default CustomCursorContext;