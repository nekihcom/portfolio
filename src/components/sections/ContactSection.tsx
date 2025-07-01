import { Card, CardContent } from "@/components/ui/card";
import { ContactButton } from "@/components/ContactButton";
import { socialLinks } from "@/data/SocialLinkData";
import { ReactNode } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialLink } from "@/components/features/SocialLink";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ContactSectionProps {
  title?: string;
  description?: string;
  message?: ReactNode;
  className?: string;
}

/**
 * お問い合わせセクションコンポーネント
 * 洗練されたデザインでお問い合わせを促進
 * 
 * @param title - セクションタイトル
 * @param description - 説明文
 * @param message - メッセージ文
 * @param className - 追加のCSSクラス
 */
export function ContactSection({
  title = "一緒にモノづくりしませんか？",
  description = "お困りごとのお手伝いをします",
  message = <>お仕事のご相談や技術的なご質問等、<br />どんなことでもお気軽にご連絡ください。</>,
  className = ""
}: ContactSectionProps) {
  return (
    <SectionBackground className={className}>
      <AnimatedSection delay={0.2}>
        <SectionHeader
          title={title}
          description={description}
        />
      </AnimatedSection>

      {/* メインコンテンツ */}
      <AnimatedSection delay={0.4}>
        <Card className="max-w-4xl mx-auto border-0 bg-white/90 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左側：メッセージとボタン */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-center text-2xl font-semibold text-gray-900 mb-4">
                    お気軽にご相談ください
                  </h3>
                  <p className="text-center text-lg text-gray-600 leading-relaxed mb-6">
                    {message}
                  </p>
                </div>

                <div className="space-y-4">
                  <ContactButton />
                </div>
              </div>

              {/* 右側：SNSリンクと連絡先 */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>💬</span>
                    他の連絡方法
                  </h4>
                  <div className="space-y-3">
                    {socialLinks.slice(0, 2).map((link) => (
                      <SocialLink
                        key={link.name}
                        link={link}
                        className="p-4 rounded-xl bg-gray-50 hover:bg-teal-50"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </SectionBackground>
  );
} 