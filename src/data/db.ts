import faceSvg from "../assets/face.svg";
import mobileHandSvg from "../assets/mobile-hand.svg";

export const evaluation = [
  {
    title: "Personal Rating",
    icon: faceSvg,
    detail: ["Precise", "Local", "For free"],
    border: {
      title: "Recommended",
      color: "text-white",
      borderColor: "border-blue-700",
      bgColor: "bg-blue-700",
    },
    properties: ["Land", "House", "Apartment", "Commercial"],
  },
  {
    title: "Online Review",
    icon: mobileHandSvg,
    detail: ["Value range", "in 2 minutes", "For free"],
    border: {
      title: "Fast",
      color: "text-white",
      borderColor: "border-gray-400",
      bgColor: "bg-gray-400",
    },
    properties: ["Land", "House", "Apartment", "Commercial"],
  },
];
