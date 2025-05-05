import { SectionTitle } from "@/components/ui/SectionTitle"
import { ContactForm } from "@/components/ui/ContactForm"
import { SectionContainer } from "@/components/ui/SectionContainer"

export default function Contact() {
  return (
    <SectionContainer id="contact" className="my-48">
      <SectionTitle isCenter={true}>Contact</SectionTitle>
      <ContactForm />
    </SectionContainer>
  )
} 