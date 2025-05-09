import { FaMapLocationDot } from "react-icons/fa6";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { formmItem } from "@/components/custom/Drop/Drop";
import image from "@/public/hero_bg_3_5.jpg";
type formmItemWithImage = formmItem & {
  imageUrl: string;
};
export const destinationItems: formmItemWithImage[] = [
  {
    label: "Italy",
    value: "italy",
    imageUrl: image as unknown as string,
  },
  {
    label: "Saudi Arab",
    value: "saudiArab",
    imageUrl: "",
  },
  {
    label: "Dubai",
    value: "dubai",
    imageUrl: image as unknown as string,
  },
  {
    label: "England",
    value: "england",
    imageUrl: image as unknown as string,
  },
];

export const typeItems: formmItem[] = [
  {
    label: "Beach",
    value: "beach",
  },
  {
    label: "Couple Tour",
    value: "coupleTour",
  },
  {
    label: "Family Tour",
    value: "familyTour",
  },
];
export const durationItems: formmItem[] = [
  {
    label: "1 days",
    value: "1",
  },
  {
    label: "2 days",
    value: "2",
  },
  {
    label: "3 days",
    value: "3",
  },
  {
    label: "4 days",
    value: "4",
  },
  {
    label: "5 days",
    value: "5",
  },
  {
    label: "6 days",
    value: "6",
  },
  {
    label: "7 days",
    value: "7",
  },
];
const searchItems = [
  {
    id: "item-1",
    name: "destination",
    title: "Destination",
    icon: <FaMapLocationDot className="text-3xl text-[#1CA8CB]" />,
    drop: destinationItems,
    dropPlace: "Destination",
  },
  {
    id: "item-2",
    name: "type",
    title: "Type",
    icon: <FaPersonWalkingLuggage className="text-3xl text-[#1CA8CB]" />,
    drop: typeItems,
    dropPlace: "Type",
  },
  {
    id: "item-3",
    name: "duration",
    title: "Duration",
    icon: <MdOutlineWatchLater className="text-3xl text-[#1CA8CB]" />,
    drop: durationItems,
    dropPlace: "Duration",
  },
];
export default searchItems;
