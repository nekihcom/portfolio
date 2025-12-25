import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONTACT_FORM_URL = "https://forms.gle/KuaXshQ4vrVMUeSj9";

export const CtaSection = () => {
  return (
    <section className="bg-gray-800 text-gray-50 py-24 px-4 md:px-0">
      <div className="container w-full lg:w-[1024px] mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            お問い合わせ
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            ご質問やお仕事のご相談がございましたら、<br />お気軽にお問い合わせください。
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            <Link
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせフォームへ
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

