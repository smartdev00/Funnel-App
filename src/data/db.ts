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

const PersonalFinal = [
  {
    title: "Find your new home now with Homeday.",
    type: "no",
    id: "personal_buy_final",
    layer: "final",
  },
  {
    type: "no",
    id: "personal_sell_final",
    successInquiry: true,
    layer: "final",
  },
];

export const RecepientInfor = {
  title: "Your rating will now be created. \nWho should receive the rating?",
  type: "input",
  id: "recepient_infor",
  next: PersonalFinal[1],
};

export const AddressInput = [
  {
    title: "Please enter the address of your property",
    type: "input",
    id: "personal_address_input",
    prev: {},
    next: RecepientInfor,
    icon: mapAddress,
  },
  {
    title: "Please enter the address of your property",
    semiTitle: "As prices per square meter can vary greatly even on a street, please provide the full address.",
    type: "input",
    id: "fast_address_input",
    prev: {},
    next: RecepientInfor,
    icon: mapAddress,
  },
];

export const PostalInput = [
  {
    title: "Please enter the address of your property",
    type: "input",
    id: "personal_ground_postal_input",
    prev: {},
    next: RecepientInfor,
    icon: mapAddress,
  },
  {
    title: "In welcher Region befindet sich Ihre Immobilie?",
    semiTitle: "The location of your property forms the basis for a valuation.",
    type: "input",
    id: "fast_ground_postal_input",
    prev: {},
    next: RecepientInfor,
    icon: mapAddress,
  },
];

export const SellDate = [
  {
    title: "When would you like to sell your property?",
    type: "select",
    prev: {},
    items: [
      {
        title: "1 - 3 Month",
        icon: month1_3,
        next: PostalInput[0],
      },
      {
        title: "4 - 6 Month",
        icon: month4_6,
        next: PostalInput[0],
      },
      {
        title: "> 6 Month",
        icon: month6,
        next: PostalInput[0],
      },
      {
        title: "No sale planned",
        icon: monthNot,
        next: PostalInput[0],
      },
    ],
  },
  {
    title: "In which region is your property located?",
    type: "select",
    prev: {},
    items: [
      {
        title: "1 - 3 Month",
        icon: month1_3,
        next: AddressInput[1],
      },
      {
        title: "4 - 6 Month",
        icon: month4_6,
        next: AddressInput[1],
      },
      {
        title: "> 6 Month",
        icon: month6,
        next: AddressInput[1],
      },
      {
        title: "No sale planned",
        icon: monthNot,
        next: AddressInput[1],
      },
    ],
  },
];

export const GroundBuySell = [
  {
    title: "What topic are you interested in?",
    type: "select",
    id: "personal_ground_buy_sell",
    prev: {},
    items: [
      {
        next: SellDate[0],
        title: "Sell",
        icon: sellSvg,
      },
      {
        next: PersonalFinal[0],
        title: "Buy",
        icon: buySvg,
      },
    ],
  },
  {
    title: "What do you need the real estate valuation for?",
    type: "select",
    id: "fast_ground_buy_sell",
    prev: {},
    items: [
      {
        next: SellDate[1],
        title: "Sell",
        icon: sellSvg,
      },
      {
        next: PersonalFinal[0],
        title: "Buy",
        icon: buySvg,
      },
    ],
  },
];

export const BuySell = [
  {
    title: "What topic are you interested in?",
    type: "select",
    prev: {},
    items: [
      {
        next: AddressInput[0],
        title: "Sell",
        icon: sellSvg,
      },
      {
        next: PersonalFinal[0],
        title: "Buy",
        icon: buySvg,
      },
    ],
  },
  {
    title: "What do you need the real estate valuation for?",
    type: "select",
    prev: {},
    items: [
      {
        next: SellDate[1],
        title: "Sell",
        icon: sellSvg,
      },
      {
        next: PersonalFinal[0],
        title: "Buy",
        icon: buySvg,
      },
    ],
  },
];

const UsingReason = {
  title: "How is your property currently used?",
  id: "fast_using_reason",
  type: "select",
  items: [
    { title: "Own use", icon: "", next: BuySell[1] },
    { title: "Vacant", icon: "", next: BuySell[1] },
    { title: "Rented", icon: "", next: BuySell[1] },
  ],
};

const EquipmentQuality = {
  title: "What is the quality of the equipment?",
  id: "fast_equipment_quality",
  type: "select",
  items: [
    { title: "Simple", icon: "", next: UsingReason },
    { title: "Normal", icon: "", next: UsingReason },
    { title: "Upscale", icon: "", next: UsingReason },
    { title: "Luxurious", icon: "", next: UsingReason },
  ],
};

const InteriorFeature = {
  title: "What interior fittings does your property have?",
  next: EquipmentQuality,
  id: "fast_interior_feature",
  type: "check",
  items: [
    { title: "Elevator", icon: "", type: "check", name: "elevator" },
    { title: "Attic", icon: "", type: "check", name: "attic" },
    { title: "Fitted kitchen", icon: "", type: "check", name: "kitchen" },
    { title: "Fireplace", icon: "", type: "check", name: "fireplace" },
    { title: "Cellar", icon: "", type: "check", name: "cellar" },
    { title: "Parquet flooring", icon: "", type: "check", name: "parquet" },
  ],
};

const ExteriorFeature = {
  title: "What exterior features does your property have?",
  next: InteriorFeature,
  id: "fast_exterior_feature",
  type: "check",
  items: [
    { icon: "", title: "Balcony", type: "check", name: "balcony" },
    { icon: "", title: "Garage parking space", type: "check", name: "garage" },
    { icon: "", title: "Garden", type: "check", name: "garden" },
    { icon: "", title: "Solar system", type: "check", name: "solar" },
    { icon: "", title: "Pitch", type: "check", name: "pitch" },
    { icon: "", title: "Terrace", type: "check", name: "terrace" },
  ],
};

export const ModernizedYear = {
  title: "When was your property last modernized?",
  semiTitle: "A major modernization is, for example, the installation of more energy-efficient windows.",
  id: "fast_modernized_year",
  items: [
    {
      next: ExteriorFeature,
      title: "1 - 3 years ago",
      icon: sellSvg,
    },
    {
      next: ExteriorFeature,
      title: "4 - 9 years ago",
      icon: sellSvg,
    },
    {
      next: ExteriorFeature,
      title: "10 - 15 years ago",
      icon: sellSvg,
    },
    {
      next: ExteriorFeature,
      title: "More than 15 years ago",
      icon: sellSvg,
    },
    {
      next: ExteriorFeature,
      title: "Never before",
      icon: sellSvg,
    },
  ],
};

export const BuiltYear = {
  title: "In which year was the property built?",
  semiTitle: "If you do not know the exact year, please enter an estimate.",
  next: ModernizedYear,
  id: "fast_built_year",
};

export const RoomLarge = {
  title: "How large is the living space?",
  semiTitle: "If you do not know the exact value, please enter an estimate.",
  next: BuiltYear,
  id: "fast_room_large",
};

const RoomCount = {
  title: "How many rooms does your apartment have?",
  semiTitle: "You can also enter half rooms. The bathroom and kitchen do not count as rooms.",
  id: "room_count",
  next: BuiltYear,
};

export const largeObjects = [
  {
    title: "Please select the plot area.",
    id: "personal_ground_area",
    icon: largeGround,
    next: GroundBuySell[0],
    prev: {},
  },
  {
    title: "How large is your property?",
    semiTitle: "If you do not know the exact value, please enter an estimate.",
    id: "fast_ground_area",
    next: GroundBuySell[1],
    prev: {},
  },
  {
    title: "How large is your property?",
    semiTitle: "If you do not know the exact value, please enter an estimate.",
    id: "fast_house_area",
    next: RoomLarge,
    prev: {},
  },
  {
    title: "How big is your apartment?",
    semiTitle: "If you do not know the exact value, please enter an estimate.",
    id: "fast_apartment_area",
    next: RoomCount,
    prev: {},
  },
];

const FloorCount = {
  title: "How many floors does the building have in total?",
  id: "floor_count",
  next: largeObjects[3],
};

const WhichFloor = {
  title: "On which floor is the apartment located?",
  id: "which_floor",
  next: FloorCount,
};

export const houseTypes = [
  {
    title: "Please select the type of your house",
    id: "personal_house",
    items: [
      { next: BuySell[0], title: "Detached house", icon: houseDetachedSvg },
      { next: BuySell[0], title: "Apartment building", icon: houseApartmentBuildingSvg },
      { next: BuySell[0], title: "Semi-detached house", icon: houseSemiDetachedSvg },
      { next: BuySell[0], title: "Middle row house", icon: houseMiddleSvg },
      { next: BuySell[0], title: "End terraced house", icon: houseEndSvg },
      { next: BuySell[0], title: "Bungalow", icon: houseBunglowSvg },
    ],
    prev: {},
  },
  {
    title: "Please select the type of your house",
    id: "fast_house",
    items: [
      { next: largeObjects[2], title: "Detached house", icon: houseDetachedSvg },
      { next: largeObjects[2], title: "Apartment building", icon: houseApartmentBuildingSvg },
      { next: largeObjects[2], title: "Semi-detached house", icon: houseSemiDetachedSvg },
      { next: largeObjects[2], title: "Middle row house", icon: houseMiddleSvg },
      { next: largeObjects[2], title: "End terraced house", icon: houseEndSvg },
      { next: largeObjects[2], title: "Bungalow", icon: houseBunglowSvg },
    ],
    prev: {},
  },
];

export const apartmentTypes = [
  {
    title: "Please select the type of your house",
    id: "Personal Apartment",
    type: "select",
    items: [
      { next: BuySell[0], title: "Souterrain", icon: souterrain },
      { next: BuySell[0], title: "First floor", icon: firstFloor },
      { next: BuySell[0], title: "Top floor", icon: topFloor },
      { next: BuySell[0], title: "Apartment", icon: apartment },
      { next: BuySell[0], title: "Maisonette", icon: mainsonette },
      { next: BuySell[0], title: "Loft", icon: loft },
    ],
    prev: {},
  },
  {
    title: "Please select the type of your house",
    id: "Fast Apartment",
    type: "select",
    items: [
      { next: largeObjects[3], title: "Souterrain", icon: souterrain },
      { next: FloorCount, title: "First floor", icon: firstFloor },
      { next: WhichFloor, title: "Top floor", icon: topFloor },
      { next: WhichFloor, title: "Apartment", icon: apartment },
      { next: WhichFloor, title: "Maisonette", icon: mainsonette },
      { next: WhichFloor, title: "Loft", icon: loft },
    ],
    prev: {},
  },
];

/**
 * Prev -> evaluation.item1
 * item1.next -> largeObjects[0]
 * item2.next -> houseTypes
 * item3.next -> apartmentTypes
 * item4.next -> BuySell
 */
export const PersonalPropertyTypes = {
  title: "Which property is it?",
  id: "1",
  items: [
    { next: largeObjects[0], title: "Land", icon: landSvg },
    { next: houseTypes[0], title: "House", icon: houseSvg },
    { next: apartmentTypes[0], title: "Apartment", icon: apartmentSvg },
    { next: BuySell[0], title: "Commercial", icon: commercialSvg },
  ],
  checks: ["High-quality analysis", "Current market prices", "100% free of charge & non-binding"],
};

/**
 * Prev -> evaluation.item1
 * item1.next -> largeObjects[0]
 * item2.next -> houseTypes
 * item3.next -> apartmentTypes
 */
export const FastPropertyTypes = {
  title: "Which property is it?",
  id: "1",
  items: [
    { next: largeObjects[1], title: "Land", icon: landSvg },
    { next: houseTypes[1], title: "House", icon: houseSvg },
    { next: apartmentTypes[1], title: "Apartment", icon: apartmentSvg },
  ],
  checks: ["High-quality analysis", "Current market prices", "100% free of charge & non-binding"],
};

/**
 * Layer root
 * item1.next -> PersonalPropertyTypes
 * item2.next -> FastPropertyTypes
 */
export const evaluation = {
  title: "Start your free evaluation now",
  id: "0",
  layer: "root",
  items: [
    {
      id: "0-0",
      next: PersonalPropertyTypes,
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
      next: FastPropertyTypes,
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
