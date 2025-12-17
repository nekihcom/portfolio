import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
}

// 画像スライダーコンポーネント
const ImageSlider = ({ images }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 上段: サムネイルスライダー */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
              index === selectedIndex
                ? "border-primary scale-105"
                : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`サムネイル ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* 下段: 選択された画像 */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
        <Image
          src={images[selectedIndex]}
          alt={`画像 ${selectedIndex + 1}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSlider;