import { twMerge } from "tailwind-merge";
import cslx from "clsx";

export const cn = (...inputs) => {
  return twMerge(cslx(inputs));
};
