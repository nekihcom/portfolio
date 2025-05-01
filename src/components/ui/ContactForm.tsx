import { BgLink } from "@/components/ui/BgLink"

export function ContactForm() {
  return (
    <div className="text-center">
      <p className="mb-8 text-gray-600">
        ご質問やお問い合わせは、下記のフォームよりお願いいたします。
      </p>
      <BgLink
        href="https://docs.google.com/forms/d/e/1FAIpQLSeRWwNv5Fyxqmv6AJQuzAJWonAyoSAd1rerzl9ncV1dyM-zgA/viewform?usp=dialog"
        text="ちょっとしたことでもご相談ください"
      />
    </div>
  )
} 