import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const containerWidth = {
  sm: "max-w-[330px]",
  md: "max-w-[660px]",
  lg: "max-w-[960px]",
}
