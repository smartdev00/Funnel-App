import faceSvg from "../assets/face.svg";
import mobileHandSvg from "../assets/mobile-hand.svg";
import landSvg from "../assets/land.svg";
import houseSvg from "../assets/house.svg";
import apartmentSvg from "../assets/apartment.svg";
import commercialSvg from "../assets/commercial.svg";
import houseDetachedSvg from "../assets/house-detached.svg";
import houseSemiDetachedSvg from "../assets/house-semi-detached.svg";
import houseBunglowSvg from "../assets/house-bunglow.svg";
import houseEndSvg from "../assets/house-end.svg";
import houseMiddleSvg from "../assets/house-middle.svg";
import houseApartmentBuildingSvg from "../assets/house-apartment-building.svg";
import buySvg from "../assets/buy.svg";
import sellSvg from "../assets/sell.svg";

export const houseTypes = {
  title: "Please select the type of your house",
  id: "House Types",
  items: [
    { next: "large", title: "Detached house", icon: houseDetachedSvg },
    { next: "large", title: "Apartment building", icon: houseApartmentBuildingSvg },
    { next: "large", title: "Semi-detached house", icon: houseSemiDetachedSvg },
    { next: "large", title: "Middle row house", icon: houseMiddleSvg },
    { next: "large", title: "End terraced house", icon: houseEndSvg },
    { next: "large", title: "Bungalow", icon: houseBunglowSvg },
  ],
};

export const propertyTypes = {
  title: "Which property is it?",
  id: "1",
  items: [
    { next: "large", title: "Land", icon: landSvg },
    { next: houseTypes, title: "House", icon: houseSvg },
    { next: "Apartment Type", title: "Apartment", icon: apartmentSvg },
    { next: "Buy Sell", title: "Commercial", icon: commercialSvg },
  ],
  checks: ["High-quality analysis", "Current market prices", "100% free of charge & non-binding"]
};

export const largeObjects = [];

export const evaluation = {
  title: "Start your free evaluation now",
  id: "0",
  items: [
    {
      id: "0-0",
      next: propertyTypes,
      title: "Personal Rating",
      icon: faceSvg,
      checks: ["Precise", "Local", "For free"],
      style: {
        title: "Recommended",
        color: "text-white",
        borderColor: "border-blue-700",
        bgColor: "bg-blue-700",
      },
    },
    {
      id: "0-1",
      next: propertyTypes,
      title: "Online Review",
      icon: mobileHandSvg,
      checks: ["Value range", "in 2 minutes", "For free"],
      style: {
        title: "Fast",
        color: "text-white",
        borderColor: "border-gray-400",
        bgColor: "bg-gray-400",
      },
    },
  ],
};

export const personalProps = [
  {
    title: "Land",
    icon: landSvg,
    steps: [
      {
        title: "Please select the plot area.",
      },
    ],
  },
  {
    title: "House",
    icon: houseSvg,
    steps: [
      {
        title: "Please select the type of your house",
        items: [
          { title: "Detached house", icon: houseDetachedSvg },
          { title: "Apartment building", icon: houseApartmentBuildingSvg },
          { title: "Semi-detached house", icon: houseSemiDetachedSvg },
          { title: "Middle row house", icon: houseMiddleSvg },
          { title: "End terraced house", icon: houseEndSvg },
          { title: "Bungalow", icon: houseBunglowSvg },
        ],
      },
      {
        title: "What topic are you interested in?",
        items: [
          { title: "Buy", icon: buySvg },
          { title: "Sell", icon: sellSvg },
        ],
      },
    ],
  },
  { title: "Apartment", icon: apartmentSvg },
  { title: "Commercial", icon: commercialSvg },
];
