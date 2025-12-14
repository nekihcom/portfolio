'use client';

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/common/Container";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-20">
      <Container>
        <div className="flex items-center justify-between h-20 px-4 lg:px-0">
          {/* サイトタイトル（左側） */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:opacity-70 transition-opacity">
            Mochiken
          </Link>

          {/* PC表示: ナビゲーションメニュー（右側） */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link 
              href="/blog" 
              className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* スマートフォン・タブレット表示: ハンバーガーボタン（右側） */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニューを開く"
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* ハンバーガーメニュー（スマートフォン・タブレット表示） */}
      <div
        className={`md:hidden fixed top-20 right-0 bottom-0 w-64 bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          <Link
            href="/blog"
            onClick={closeMenu}
            className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2"
          >
            Blog
          </Link>
        </nav>
      </div>

      {/* オーバーレイ（メニューが開いている時のみ表示） */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30 top-20"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

