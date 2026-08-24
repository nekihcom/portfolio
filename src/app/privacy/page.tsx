import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "個人情報の取り扱いについて説明します。",
};

const SECTIONS = [
  {
    heading: "1. 運営者",
    body: (
      <>本サイト（{SITE_NAME}、以下「当サイト」）は、個人により運営されています。</>
    ),
  },
  {
    heading: "2. 取得する情報と利用目的",
    body: (
      <>
        当サイトのお問い合わせフォームは外部サービス（Google
        フォーム）を利用しており、送信いただいた氏名・メールアドレス等の情報は
        Google
        社のサーバー上で管理されます。取得した情報は、お問い合わせへの回答その他必要な連絡のためにのみ利用し、目的外の利用は行いません。取り扱いの詳細は
        Google 社のプライバシーポリシーもあわせてご確認ください。
      </>
    ),
  },
  {
    heading: "3. アクセス解析・Cookie",
    body: (
      <>
        現時点でアクセス解析ツールは導入していません。将来的に導入する場合は、本ポリシーを更新し、使用するツールと取得情報を明記します。
      </>
    ),
  },
  {
    heading: "4. 第三者提供",
    body: (
      <>
        法令に基づく場合を除き、取得した個人情報を本人の同意なく第三者に提供することはありません。
      </>
    ),
  },
  {
    heading: "5. 開示・訂正・削除等の請求",
    body: (
      <>
        ご自身の個人情報の開示・訂正・削除等をご希望の場合は、お問い合わせフォームよりご連絡ください。内容を確認のうえ、合理的な範囲で対応します。
      </>
    ),
  },
  {
    heading: "6. 本ポリシーの変更",
    body: (
      <>
        本ポリシーの内容は、法令の変更やサイト運営方針の変更に応じて、予告なく改定することがあります。改定後の内容は本ページに掲載した時点で効力を生じます。
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex w-full max-w-[840px] flex-col gap-9 px-6 py-9 pc:gap-11 pc:px-0 pc:py-20">
      <header className="flex flex-col gap-3 border-b border-foreground pb-9">
        <span className="font-mono text-xs tracking-[0.08em] text-gray-label">
          PRIVACY POLICY
        </span>
        <h1 className="text-[30px] font-bold leading-[1.35] pc:text-[44px] pc:leading-[1.3]">
          プライバシーポリシー
        </h1>
      </header>

      {SECTIONS.map((section) => (
        <section key={section.heading} className="flex flex-col gap-[14px]">
          <h2 className="text-xl font-bold leading-[1.5] pc:text-2xl">
            {section.heading}
          </h2>
          <p className="text-[15px] leading-[1.85] text-gray-body pc:text-base">
            {section.body}
          </p>
        </section>
      ))}
    </div>
  );
}
