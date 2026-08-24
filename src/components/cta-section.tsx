import { CONTACT_FORM_URL } from "@/lib/site";

type CtaSectionProps = {
  heading: string;
  description: string;
  headingSize?: "lg" | "md";
  compactPadding?: boolean;
};

export function CtaSection({
  heading,
  description,
  headingSize = "lg",
  compactPadding = false,
}: CtaSectionProps) {
  return (
    <div
      className={`mx-6 mb-10 flex flex-col gap-5 border border-foreground p-6 pc:mx-[120px] pc:mb-[120px] pc:flex-row pc:items-center pc:justify-between pc:gap-12 ${
        compactPadding ? "pc:p-16" : "pc:p-[72px_64px]"
      }`}
    >
      <div className="flex flex-col gap-3 pc:gap-[14px]">
        <h3
          className={
            headingSize === "lg"
              ? "text-2xl font-bold pc:text-[32px]"
              : "text-2xl font-bold pc:text-[30px]"
          }
        >
          {heading}
        </h3>
        <p className="whitespace-pre-line text-sm leading-[1.8] text-gray-sub pc:text-[15px]">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-[10px] pc:items-end">
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-accent px-6 py-[18px] text-center text-[15px] font-bold text-white transition-colors duration-150 hover:bg-accent-hover pc:inline-block pc:px-10 pc:py-5 pc:text-base"
        >
          Contact ↗<span className="sr-only">（新しいタブで開きます）</span>
        </a>
        <span className="text-center font-mono text-[11px] text-gray-label pc:text-right">
          Google フォームへ移動します
        </span>
      </div>
    </div>
  );
}
