import { ContactButton } from "@/components/ui/ContactButton"

export function ContactForm() {
  return (
    <div className="text-center">
      <p className="mb-8 text-gray-600">
        お問い合わせやお仕事のご依頼はこちらからお気軽にご連絡ください。
        <br />3日以内にご返信いたします。
      </p>
      <ContactButton
        href="https://forms.gle/36pauyQdBoQ21VzV6"
        text="Send Your Message"
      />
    </div>
  )
} 