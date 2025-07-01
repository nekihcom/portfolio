'use client';

import { Button } from "@/components/ui/button";

export function ContactButton() {
  const handleContactClick = () => {
    const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
    if (googleFormUrl) {
      window.open(googleFormUrl, '_blank');
    } else {
      console.error('GoogleForm URL is not configured');
      alert('お問い合わせフォームの設定が完了していません。');
    }
  };

  return (
    <div className="relative group flex justify-center">
      {/* グロー効果 */}
      {/* <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div> */}
      
      <Button 
        size="lg" 
        onClick={handleContactClick}
        className="relative px-8 py-4 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 hover:from-teal-700 hover:via-teal-800 hover:to-teal-900 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 rounded-xl group"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl group-hover:rotate-12 transition-transform duration-300">✉️</span>
          <span>今すぐお問い合わせ</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </Button>
    </div>
  );
} 