import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactButton } from "@/components/ContactButton";

interface ContactSectionProps {
  title?: string;
  description?: string;
  message?: string;
  note?: string;
  className?: string;
}

/**
 * お問い合わせセクションコンポーネント
 * お問い合わせフォームへの誘導を表示
 * 
 * @param title - セクションタイトル
 * @param description - 説明文
 * @param message - メッセージ文
 * @param note - 注意書き
 * @param className - 追加のCSSクラス
 */
export function ContactSection({
  title = "お問い合わせ",
  description = "ご質問やお仕事のご相談はお気軽に",
  message = "フリーランスでのお仕事や、技術的な相談など、\nどんなことでもお気軽にお問い合わせください。",
  note = "※GoogleFormは新しいタブで開きます",
  className = ""
}: ContactSectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-lg">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-slate-600 mb-6 whitespace-pre-line">
              {message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton />
            </div>
            <p className="text-xs text-slate-500 mt-4">
              {note}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
} 