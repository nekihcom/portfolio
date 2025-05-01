import { SectionTitle } from "@/components/ui/SectionTitle"
import { ContactForm } from "@/components/ui/ContactForm"
import { SectionContainer } from "@/components/ui/SectionContainer"

export default function Contact() {
  return (
    <SectionContainer id="contact" className="bg-gray-400a">
      <SectionTitle isCenter={true}>Contact</SectionTitle>
      <ContactForm />
    </SectionContainer>
  )
} 