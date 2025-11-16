"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import type { Profile } from "@/types/type";

interface HeroSectionProps {
  profile: Profile;
}

interface TypewriterConfig {
  /** 1文字あたりの表示速度（ミリ秒） */
  typingSpeed?: number;
  /** 全文字表示後のカーソル点滅間隔（ミリ秒） */
  cursorBlinkSpeed?: number;
  /** アニメーション開始の遅延（ミリ秒） */
  startDelay?: number;
}

// アニメーション設定（調整可能）
const TYPEWRITER_CONFIG: {
  title: TypewriterConfig;
  subtitle: TypewriterConfig;
} = {
  title: {
    typingSpeed: 150, // タイトルの表示速度
    cursorBlinkSpeed: 530, // カーソルの点滅速度
    startDelay: 200, // 開始遅延
  },
  subtitle: {
    typingSpeed: 80, // サブタイトルの表示速度
    cursorBlinkSpeed: 530, // カーソルの点滅速度
    startDelay: 2000, // タイトル表示後に開始（タイトルの文字数 × 速度 + 余裕）
  },
};

export function HeroSection({ profile }: HeroSectionProps) {
  const titleText = "MOCHIKEN";
  const subtitleText = "SOFTWARE ENGINEER";

  const title = useTypewriter(titleText, TYPEWRITER_CONFIG.title);
  const subtitle = useTypewriter(subtitleText, TYPEWRITER_CONFIG.subtitle);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-[100px]">
      <div className="flex min-h-[80vh] items-center justify-center dark:bg-black">
        <div className="w-full">
          <h1 className="mb-4 text-6xl font-bold dark:text-white sm:text-8xl md:text-9xl">
            {title.displayedText}
            {title.showCursor && !title.isComplete && (
              <span className="animate-blink inline-block ml-1">|</span>
            )}
          </h1>
          <p className="text-3xl font-bold dark:text-white sm:text-5xl md:text-6xl">
            {subtitle.displayedText}
            {subtitle.showCursor && title.isComplete && (
              <span className="animate-blink inline-block ml-1">|</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

