import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const containerWidth = {
  sm: "w-[90%] max-w-[330px]",
  md: "w-[90%] max-w-[660px]",
  lg: "w-[90%] max-w-[1200px]",
}

/**
 * 日付をフォーマットする関数
 * @param dateString ISO形式の日付文字列
 * @returns フォーマットされた日付文字列（例：2023年5月15日）
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
