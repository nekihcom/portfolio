import { clsx, type ClassValue } from "clsx"
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
* 日付をフォーマット（YYYY/MM/DD形式）
*/
export const formatDate = (dateString: string): string => {
 return dayjs(dateString).format("YYYY/MM/DD");
};
