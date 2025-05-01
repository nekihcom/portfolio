import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ContactForm } from "@/components/ui/ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-50">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <ContactForm />
      </Container>
    </section>
  )
} 