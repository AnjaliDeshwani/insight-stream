import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Meditation",
  },
  {
    _id: uuid(),
    categoryName: "Yoga",
  },
  {
    _id: uuid(),
    categoryName: "Sleep",
  },
  {
    _id: uuid(),
    categoryName: "Stress Relief and Relaxing",
  },
];
