import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "個人情報の取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] px-6 py-8 pc:py-16">
      <h1 className="text-3xl font-semibold">プライバシーポリシー</h1>

      <section className="mt-10 flex flex-col gap-3">
        <h2 className="text-xl font-medium">1. 運営者</h2>
        <p className="text-foreground/70">
          本サイト（{SITE_NAME}、以下「当サイト」）は、個人により運営されています。
        </p>
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-xl font-medium">2. 取得する情報と利用目的</h2>
        <p className="text-foreground/70">
          当サイトのお問い合わせフォームは外部サービス（Google
          フォーム）を利用しており、送信いただいた氏名・メールアドレス等の情報は
          Google
          社のサーバー上で管理されます。取得した情報は、お問い合わせへの回答その他必要な連絡のためにのみ利用し、目的外の利用は行いません。取り扱いの詳細は
          Google
          社のプライバシーポリシーもあわせてご確認ください。
        </p>
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-xl font-medium">3. アクセス解析・Cookie</h2>
        <p className="text-foreground/70">
          現時点でアクセス解析ツールは導入していません。将来的に導入する場合は、本ポリシーを更新し、使用するツールと取得情報を明記します。
        </p>
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-xl font-medium">4. 第三者提供</h2>
        <p className="text-foreground/70">
          法令に基づく場合を除き、取得した個人情報を本人の同意なく第三者に提供することはありません。
        </p>
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-xl font-medium">5. 開示・訂正・削除等の請求</h2>
        <p className="text-foreground/70">
          ご自身の個人情報の開示・訂正・削除等をご希望の場合は、お問い合わせフォームよりご連絡ください。内容を確認のうえ、合理的な範囲で対応します。
        </p>
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <h2 className="text-xl font-medium">6. 本ポリシーの変更</h2>
        <p className="text-foreground/70">
          本ポリシーの内容は、法令の変更やサイト運営方針の変更に応じて、予告なく改定することがあります。改定後の内容は本ページに掲載した時点で効力を生じます。
        </p>
      </section>
    </div>
  );
}
