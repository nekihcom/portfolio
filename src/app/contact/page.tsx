import { redirect } from "next/navigation";

const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeh1ZkxbbvuNXcLy3Ql0EN0SxglVI0j_Zux2eywzaGmFPCn7A/viewform?usp=header";

export default function ContactPage() {
  redirect(CONTACT_FORM_URL);
}
