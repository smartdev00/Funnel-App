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
import balcony from "../assets/exterior/exterior-balcony.png";
import garage from "../assets/exterior/exterior-garage.jpg";
import garden from "../assets/exterior/exterior-garden.jpg";
import solar from "../assets/exterior/exterior-solar.jpg";
import park from "../assets/exterior/exterior-park.jpg";
import terrace from "../assets/exterior/exterior-terrace.jpg";
import modernize1_3 from "../assets/modernize/modernize-1-3.jpg";
import modernize4_9 from "../assets/modernize/modernize-4-9.jpg";
import modernize10_15 from "../assets/modernize/modernize-10-15.jpg";
import modernize15 from "../assets/modernize/modernize-15.jpg";
import modernizeNot from "../assets/modernize/modernize-not.jpg";
import interiorElevator from "../assets/interior/interior-elevator.jpg";
import interiorAttic from "../assets/interior/interior-attic.png";
import interiorCellar from "../assets/interior/interior-cellar.jpg";
import interiorFireplace from "../assets/interior/interior-fireplace.png";
import interiorKitchen from "../assets/interior/interior-kitchen.png";
import interiorParquet from "../assets/interior/interior-parquet.png";
import qualitySimple from "../assets/quality/quality-simple.png";
import qualityNormal from "../assets/quality/quality-normal.jpg";
import qualityUpscale from "../assets/quality/quality-upscale.png";
import qualityLuxury from "../assets/quality/quality-luxury.png";
import purposeOwn from "../assets/purpose/purpose-self.jpg";
import purposeVarcant from "../assets/purpose/purpose-varcant.png";
import purposeRented from "../assets/purpose/purpose-rented.png";

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
    id: "personal_sell_date",
    type: "select",
    prev: {},
    items: [
      {
        title: "1 - 3 Month",
        icon: month1_3,
        next: PostalInput[0],
        text: "1 - 3 Month",
      },
      {
        title: "4 - 6 Month",
        icon: month4_6,
        next: PostalInput[0],
        text: "4 - 6 Month",
      },
      {
        title: "> 6 Month",
        icon: month6,
        next: PostalInput[0],
        text: "> 6 Month",
      },
      {
        title: "No sale planned",
        icon: monthNot,
        next: PostalInput[0],
        text: "No sale planned",
      },
    ],
  },
  {
    title: "In which region is your property located?",
    id: "fast_sell_date",
    type: "select",
    prev: {},
    items: [
      {
        title: "1 - 3 Month",
        icon: month1_3,
        next: AddressInput[1],
        text: "1 - 3 Month",
      },
      {
        title: "4 - 6 Month",
        icon: month4_6,
        next: AddressInput[1],
        text: "4 - 6 Month",
      },
      {
        title: "> 6 Month",
        icon: month6,
        next: AddressInput[1],
        text: "> 6 Month",
      },
      {
        title: "No sale planned",
        icon: monthNot,
        next: AddressInput[1],
        text: "No sale planned",
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
        text: "Sell",
      },
      {
        next: PersonalFinal[0],
        title: "Buy",
        icon: buySvg,
        text: "Buy",
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
    { title: "Own use", icon: purposeOwn, next: BuySell[1] },
    { title: "Vacant", icon: purposeVarcant, next: BuySell[1] },
    { title: "Rented", icon: purposeRented, next: BuySell[1] },
  ],
};

const EquipmentQuality = {
  title: "What is the quality of the equipment?",
  id: "fast_equipment_quality",
  type: "select",
  items: [
    { title: "Simple", icon: qualitySimple, next: UsingReason },
    { title: "Normal", icon: qualityNormal, next: UsingReason },
    { title: "Upscale", icon: qualityUpscale, next: UsingReason },
    { title: "Luxurious", icon: qualityLuxury, next: UsingReason },
  ],
};

const InteriorFeature = {
  title: "What interior fittings does your property have?",
  next: EquipmentQuality,
  id: "fast_interior_feature",
  type: "check",
  items: [
    { title: "Elevator", icon: interiorElevator, type: "check", name: "elevator" },
    { title: "Attic", icon: interiorAttic, type: "check", name: "attic" },
    { title: "Fitted kitchen", icon: interiorKitchen, type: "check", name: "kitchen" },
    { title: "Fireplace", icon: interiorFireplace, type: "check", name: "fireplace" },
    { title: "Cellar", icon: interiorCellar, type: "check", name: "cellar" },
    { title: "Parquet flooring", icon: interiorParquet, type: "check", name: "parquet" },
  ],
};

const ExteriorFeature = {
  title: "What exterior features does your property have?",
  next: InteriorFeature,
  id: "fast_exterior_feature",
  type: "check",
  items: [
    { icon: balcony, title: "Balcony", type: "check", name: "balcony" },
    { icon: garage, title: "Garage parking space", type: "check", name: "garage" },
    { icon: garden, title: "Garden", type: "check", name: "garden" },
    { icon: solar, title: "Solar system", type: "check", name: "solar" },
    { icon: park, title: "Pitch", type: "check", name: "pitch" },
    { icon: terrace, title: "Terrace", type: "check", name: "terrace" },
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
      icon: modernize1_3,
    },
    {
      next: ExteriorFeature,
      title: "4 - 9 years ago",
      icon: modernize4_9,
    },
    {
      next: ExteriorFeature,
      title: "10 - 15 years ago",
      icon: modernize10_15,
    },
    {
      next: ExteriorFeature,
      title: "More than 15 years ago",
      icon: modernize15,
    },
    {
      next: ExteriorFeature,
      title: "Never before",
      icon: modernizeNot,
    },
  ],
};

export const BuiltYear = {
  title: "In which year was the property built?",
  semiTitle: "If you do not know the exact year, please enter an estimate.",
  next: ModernizedYear,
  id: "fast_built_year",
  min: 1850,
  max: new Date().getFullYear(),
};

export const RoomLarge = {
  title: "How large is the living space?",
  semiTitle: "If you do not know the exact value, please enter an estimate.",
  next: BuiltYear,
  id: "fast_room_area",
  min: 0,
  max: 1000,
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
    type: "input",
    min: 100,
    max: 3000,
  },
  {
    title: "How large is your property?",
    semiTitle: "If you do not know the exact value, please enter an estimate.",
    id: "fast_ground_area",
    next: GroundBuySell[1],
    prev: {},
    type: "input",
    min: 0,
    max: 5000,
  },
  {
    title: "How large is your property?",
    semiTitle: "If you do not know the exact value, please enter an estimate.",
    id: "fast_house_area",
    next: RoomLarge,
    prev: {},
    type: "input",
    min: 0,
    max: 5000,
  },
  {
    title: "How big is your apartment?",
    semiTitle: "If you do not know the exact value, please enter an estimate.",
    id: "fast_apartment_area",
    next: RoomCount,
    prev: {},
    type: "input",
    min: 0,
    max: 1000,
  },
];

const FloorCount = {
  title: "How many floors does the building have in total?",
  id: "floor_count",
  type: "input",
  next: largeObjects[3],
};

const WhichFloor = {
  title: "On which floor is the apartment located?",
  id: "which_floor",
  type: "input",
  next: FloorCount,
};

export const houseTypes = [
  {
    title: "Please select the type of your house",
    id: "personal_house_type",
    items: [
      { next: BuySell[0], title: "Detached house", icon: houseDetachedSvg, text: "Detached House" },
      { next: BuySell[0], title: "Apartment building", icon: houseApartmentBuildingSvg, text: "Apartment Building" },
      { next: BuySell[0], title: "Semi-detached house", icon: houseSemiDetachedSvg, text: "Semi-detached house" },
      { next: BuySell[0], title: "Middle row house", icon: houseMiddleSvg, text: "Middle row House" },
      { next: BuySell[0], title: "End terraced house", icon: houseEndSvg, text: "End terraced House" },
      { next: BuySell[0], title: "Bungalow", icon: houseBunglowSvg, text: "Bungalow" },
    ],
    prev: {},
  },
  {
    title: "Please select the type of your house",
    id: "fast_house_type",
    items: [
      { next: largeObjects[2], title: "Detached house", icon: houseDetachedSvg, text: "Detached House" },
      {
        next: largeObjects[2],
        title: "Apartment building",
        icon: houseApartmentBuildingSvg,
        text: "Apartment Building",
      },
      { next: largeObjects[2], title: "Semi-detached house", icon: houseSemiDetachedSvg, text: "Semi-detached House" },
      { next: largeObjects[2], title: "Middle row house", icon: houseMiddleSvg, text: "Middle row House" },
      { next: largeObjects[2], title: "End terraced house", icon: houseEndSvg, text: "End terraced House" },
      { next: largeObjects[2], title: "Bungalow", icon: houseBunglowSvg, text: "Bungalow" },
    ],
    prev: {},
  },
];

export const apartmentTypes = [
  {
    title: "Please select the type of your house",
    id: "personal_apartment_type",
    type: "select",
    items: [
      { next: BuySell[0], title: "Souterrain", icon: souterrain, text: "Souterrain" },
      { next: BuySell[0], title: "First floor", icon: firstFloor, text: "First Floor" },
      { next: BuySell[0], title: "Top floor", icon: topFloor, text: "Top Floor" },
      { next: BuySell[0], title: "Apartment", icon: apartment, text: "Middle Floor" },
      { next: BuySell[0], title: "Maisonette", icon: mainsonette, text: "Maisonette" },
      { next: BuySell[0], title: "Loft", icon: loft, text: "Loft" },
    ],
    prev: {},
  },
  {
    title: "Please select the type of your house",
    id: "fast_apartment_type",
    type: "select",
    items: [
      { next: largeObjects[3], title: "Souterrain", icon: souterrain, text: "Souterrain" },
      { next: FloorCount, title: "First floor", icon: firstFloor, text: "First Floor" },
      { next: WhichFloor, title: "Top floor", icon: topFloor, text: "Top Floor" },
      { next: WhichFloor, title: "Apartment", icon: apartment, text: "Middle Floor" },
      { next: WhichFloor, title: "Maisonette", icon: mainsonette, text: "Maisonette" },
      { next: WhichFloor, title: "Loft", icon: loft, text: "Loft" },
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
  id: "personal_property_type",
  items: [
    { next: largeObjects[0], title: "Land", icon: landSvg, text: "Property" },
    { next: houseTypes[0], title: "House", icon: houseSvg, text: "House" },
    { next: apartmentTypes[0], title: "Apartment", icon: apartmentSvg, text: "Apartment" },
    { next: BuySell[0], title: "Commercial", icon: commercialSvg, text: "Commercial" },
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
  id: "fast_property_type",
  items: [
    { next: largeObjects[1], title: "Land", icon: landSvg, text: "Property" },
    { next: houseTypes[1], title: "House", icon: houseSvg, text: "House" },
    { next: apartmentTypes[1], title: "Apartment", icon: apartmentSvg, text: "Apartment" },
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
  id: "evaluation",
  layer: "root",
  items: [
    {
      id: "personal_rating",
      next: PersonalPropertyTypes,
      title: "Personal Rating",
      text: "Personal",
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
      id: "online_review",
      next: FastPropertyTypes,
      title: "Online Review",
      text: "Online",
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
