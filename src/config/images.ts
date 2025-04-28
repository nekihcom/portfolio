/**
 * 画像関連の設定
 */

/**
 * ダミー画像のURLを生成する関数
 * @param width 画像の横幅
 * @param height 画像の縦幅
 * @returns ダミー画像のURL
 */
export const getPlaceholderImageUrl = (width: number, height: number): string => {
  return `https://placehold.jp/${width}x${height}.png`
}

/**
 * 画像サイズの定数
 */
export const imageSizes = {
  project: {
    width: 800,
    height: 450
  },
  blog: {
    width: 800,
    height: 450
  },
  profile: {
    width: 400,
    height: 400
  }
} 