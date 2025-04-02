import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const containerWidth = {
  sm: "w-[90%] max-w-[330px]",
  md: "w-[90%] max-w-[660px]",
  lg: "w-[90%] max-w-[960px]",
}
