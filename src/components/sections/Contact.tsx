import { SectionTitle } from "@/components/ui/SectionTitle"
import { ContactForm } from "@/components/ui/ContactForm"
import { SectionContainer } from "@/components/ui/SectionContainer"

export default function Contact() {
  return (
    <SectionContainer id="contact" className="bg-gray-400a">
      <SectionTitle isCenter={true} description="お問い合わせやお仕事のご依頼はこちらからお気軽にご連絡ください。できるだけ早くご返信いたします。">Contact</SectionTitle>
      <ContactForm />
    </SectionContainer>
  )
} 