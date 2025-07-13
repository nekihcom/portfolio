"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // フッターエリアが画面に表示されたかどうかを判定
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // フッターが画面に表示されたらボタンを表示
        setIsVisible(footerRect.top < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期状態もチェック

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="outline"
      className={cn(
        "fixed bottom-6 right-6 z-50 size-12 rounded-full shadow-lg border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300",
        "hover:scale-110 hover:border-teal-300 hover:bg-teal-50",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="ページの最上部にスクロール"
    >
      <ChevronUp className="size-5 text-gray-600" />
    </Button>
  );
} 