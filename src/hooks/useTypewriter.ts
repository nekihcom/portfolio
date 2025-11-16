"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  /** 1文字あたりの表示速度（ミリ秒） */
  typingSpeed?: number;
  /** 全文字表示後のカーソル点滅間隔（ミリ秒） */
  cursorBlinkSpeed?: number;
  /** アニメーション開始の遅延（ミリ秒） */
  startDelay?: number;
  /** 文字列表示完了後に自動でカーソルを非表示にするか */
  hideCursorAfterComplete?: boolean;
}

interface UseTypewriterReturn {
  /** 現在表示中の文字列 */
  displayedText: string;
  /** アニメーションが完了したかどうか */
  isComplete: boolean;
  /** カーソルが表示されるかどうか */
  showCursor: boolean;
}

/**
 * タイプライターアニメーション用のカスタムフック
 * 
 * @param text 表示するテキスト
 * @param options アニメーション設定
 * @returns 表示中のテキストと状態
 */
export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
): UseTypewriterReturn {
  const {
    typingSpeed = 100,
    cursorBlinkSpeed = 530,
    startDelay = 0,
    hideCursorAfterComplete = false,
  } = options;

  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // 開始遅延
    const startTimer = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, typingSpeed, startDelay]);

  // カーソルの点滅アニメーション（完了後に開始）
  useEffect(() => {
    if (!isComplete) {
      // アニメーション中はカーソルを常に表示
      setShowCursor(true);
      return;
    }

    // 完了後は点滅を開始
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [isComplete, cursorBlinkSpeed]);

  // 完了後にカーソルを非表示にする場合
  useEffect(() => {
    if (isComplete && hideCursorAfterComplete) {
      const hideTimer = setTimeout(() => {
        setShowCursor(false);
      }, 3000); // 3秒後に非表示

      return () => clearTimeout(hideTimer);
    }
  }, [isComplete, hideCursorAfterComplete]);

  return {
    displayedText,
    isComplete,
    showCursor,
  };
}
