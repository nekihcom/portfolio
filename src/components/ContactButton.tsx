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
    <Button 
      size="lg" 
      onClick={handleContactClick}
      className="px-8"
    >
      GoogleFormでお問い合わせ
    </Button>
  );
} 