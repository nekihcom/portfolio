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


/**
 * 日付が7日以内かどうかを判定
 */
export const isWithin7Days = (dateString: string): boolean => {
  let isWithin7Days = false;
  
  const articleDate = dayjs(dateString);
  const today = dayjs();
  const diffDays = today.diff(articleDate, "day");
  if (diffDays >= 0 && diffDays <= 7) {
    isWithin7Days = true;
  }
  console.log(isWithin7Days);
  return isWithin7Days;
};