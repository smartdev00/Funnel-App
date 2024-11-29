import faceSvg from "../assets/face.svg";
import mobileHandSvg from "../assets/mobile-hand.svg";
import landSvg from "../assets/land.svg";
import houseSvg from "../assets/house.svg";
import apartmentSvg from "../assets/apartment-building.svg";
import commercialSvg from "../assets/commercial.svg";
import houseDetachedSvg from "../assets/house-detached.svg";
import houseSemiDetachedSvg from "../assets/house-semi-detached.svg";
import houseBunglowSvg from "../assets/house-bunglow.svg";
import houseEndSvg from "../assets/house-end.svg";
import houseMiddleSvg from "../assets/house-middle.svg";
import houseApartmentBuildingSvg from "../assets/house-apartment-building.svg";
import buySvg from "../assets/buy.svg";
import sellSvg from "../assets/sell.svg";
import apartment from "../assets/apartment.svg";
import firstFloor from "../assets/first-floor.svg";
import topFloor from "../assets/top-floor .svg";
import loft from "../assets/loft.svg";
import mainsonette from "../assets/mainsonette.svg";
import souterrain from "../assets/souterrain.svg";
import largeGround from "../assets/large-ground.svg";
import month1_3 from "../assets/month-1-3.svg";
import month4_6 from "../assets/month-4-6.svg";
import month6 from "../assets/month-6.svg";
import monthNot from "../assets/month-not.svg";
import mapAddress from "../assets/map.svg";

export const RecepientInfor = {
  title: "Your rating will now be created. \nWho should receive the rating?",
  type: "input",
  id: "recepient_infor",
};

export const PostalInput = {
  title: "Please enter the address of your property",
  type: "input",
  id: "postal_input",
  prev: {},
  next: RecepientInfor,
  icon: mapAddress,
};

export const SellDate = {
  title: "When would you like to sell your property?",
  type: "select",
  prev: {},
  items: [
    {
      title: "1 - 3 Month",
      icon: month1_3,
      next: PostalInput,
    },
    {
      title: "4 - 6 Month",
      icon: month4_6,
      next: PostalInput,
    },
    {
      title: "> 6 Month",
      icon: month6,
      next: PostalInput,
    },
    {
      title: "No sale planned",
      icon: monthNot,
      next: PostalInput,
    },
  ],
};

export const BuySell = {
  title: "What topic are you interested in?",
  type: "select",
  prev: {},
  items: [
    {
      next: SellDate,
      title: "Sell",
      icon: sellSvg,
    },
    {
      next: {},
      title: "Buy",
      icon: buySvg,
    },
  ],
};

export const largeObjects = [
  {
    title: "Please select the plot area.",
    id: "personal_ground",
    icon: largeGround,
    next: BuySell,
    prev: {},
  },
];

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
  prev: {},
};

export const apartmentTypes = {
  title: "Please select the type of your house",
  id: "House Types",
  type: "select",
  items: [
    { next: "large", title: "Souterrain", icon: souterrain },
    { next: "large", title: "First floor", icon: firstFloor },
    { next: "large", title: "Top floor", icon: topFloor },
    { next: "large", title: "Apartment", icon: apartment },
    { next: "large", title: "Maisonette", icon: mainsonette },
    { next: "large", title: "Loft", icon: loft },
  ],
  prev: {},
};

export const propertyTypes = {
  title: "Which property is it?",
  id: "1",
  items: [
    { next: largeObjects[0], title: "Land", icon: landSvg },
    { next: houseTypes, title: "House", icon: houseSvg },
    { next: apartmentTypes, title: "Apartment", icon: apartmentSvg },
    { next: "Buy Sell", title: "Commercial", icon: commercialSvg },
  ],
  checks: ["High-quality analysis", "Current market prices", "100% free of charge & non-binding"],
};

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
