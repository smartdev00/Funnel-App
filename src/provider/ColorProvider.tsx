import { createContext, ReactNode, useContext, useState } from "react";

interface IColorContext {
  bgColor: string;
  textColor: string;
  fillColor: string;
  strokeColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setFillColor: React.Dispatch<React.SetStateAction<string>>;
  setStrokeColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorContext = createContext<IColorContext | undefined>(undefined);

export const ColorContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bgColor, setBgColor] = useState<string>("white");
  const [textColor, setTextColor] = useState<string>("black");
  const [fillColor, setFillColor] = useState<string>("#2A88FC");
  const [strokeColor, setStrokeColor] = useState<string>("#2A88FC");
  return (
    <ColorContext.Provider
      value={{ bgColor, textColor, fillColor, strokeColor, setBgColor, setTextColor, setFillColor, setStrokeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error(`useColorContext must be used within a ColorContextProvider`);
  }
  return context;
};
