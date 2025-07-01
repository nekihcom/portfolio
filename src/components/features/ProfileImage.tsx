import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

/**
 * プロフィール画像コンポーネント
 * 装飾効果付きのプロフィール画像を表示
 * 
 * @param src - 画像のURL
 * @param alt - 代替テキスト
 * @param size - 画像サイズ（px）
 * @param className - 追加のCSSクラス
 */
export function ProfileImage({
  src,
  alt,
  size = 224, // 56 * 4 = 224px
  className = ""
}: ProfileImageProps) {
  return (
    <div className={`relative w-56 h-56 mb-8 group ${className}`}>
      {/* 装飾的な背景 */}
      <div className="absolute -inset-4 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative w-full h-full">
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="rounded-full border-4 border-white shadow-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
} 