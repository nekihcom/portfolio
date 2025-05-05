import { BgLink } from "@/components/ui/BgLink"

export function ContactForm() {
  return (
    <div className="text-center">
      <p className="mb-8 text-gray-600">
        お問い合わせやお仕事のご依頼はこちらからお気軽にご連絡ください。
        <br />3日以内にご返信いたします。
      </p>
      <BgLink
        href="https://docs.google.com/forms/d/e/1FAIpQLSeRWwNv5Fyxqmv6AJQuzAJWonAyoSAd1rerzl9ncV1dyM-zgA/viewform?usp=dialog"
        text="ちょっとしたことでもご相談ください"
      />
    </div>
  )
} 