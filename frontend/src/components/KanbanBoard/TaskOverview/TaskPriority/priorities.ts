import { assets } from "../../../../assets/assets";
import { Priority } from "../../../../types/Priority";

const priorities = [
  { value: Priority.Low, label: "Low", imgURL: assets.low },
  {
    value: Priority.Medium,
    label: "Medium",
    imgURL: assets.medium,
  },
  { value: Priority.High, label: "High", imgURL: assets.high },
];

export default priorities;
