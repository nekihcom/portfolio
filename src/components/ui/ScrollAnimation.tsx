'use client'
import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationType?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
}

/**
 * スクロール時のアニメーションコンポーネント
 * 要素が画面に入った時にアニメーションを実行
 * 
 * @param children - 子要素
 * @param className - 追加のCSSクラス
 * @param threshold - アニメーション開始の閾値（0-1）
 * @param rootMargin - マージン設定
 * @param animationType - アニメーションタイプ
 * @param delay - アニメーション遅延時間（秒）
 */
export function ScrollAnimation({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  animationType = "fade-in",
  delay = 0
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ページ読み込み時に即座にアニメーションを開始
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(timer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animationType) {
        case "fade-in":
          return "opacity-0";
        case "slide-up":
          return "opacity-0 translate-y-10";
        case "slide-left":
          return "opacity-0 -translate-x-10";
        case "slide-right":
          return "opacity-0 translate-x-10";
        case "scale-in":
          return "opacity-0 scale-95";
        default:
          return "opacity-0";
      }
    }

    switch (animationType) {
      case "fade-in":
        return "opacity-100";
      case "slide-up":
        return "opacity-100 translate-y-0";
      case "slide-left":
        return "opacity-100 translate-x-0";
      case "slide-right":
        return "opacity-100 translate-x-0";
      case "scale-in":
        return "opacity-100 scale-100";
      default:
        return "opacity-100";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform, scale'
      }}
    >
      {children}
    </div>
  );
} 