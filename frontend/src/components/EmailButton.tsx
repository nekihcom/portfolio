'use client';

import { Button } from "@/components/ui/button";

export function EmailButton() {
  const handleEmailClick = () => {
    window.open('mailto:contact@example.com', '_blank');
  };

  return (
    <Button 
      variant="outline" 
      size="lg"
      onClick={handleEmailClick}
      className="px-8"
    >
      メールで連絡
    </Button>
  );
} 