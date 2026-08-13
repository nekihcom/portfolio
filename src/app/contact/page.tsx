import { redirect } from "next/navigation";

// TODO: Google Formが作成でき次第、実際のフォームURLに差し替える
const CONTACT_FORM_URL = "https://forms.google.com/";

export default function ContactPage() {
  redirect(CONTACT_FORM_URL);
}
