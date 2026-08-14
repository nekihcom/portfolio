import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-col items-center px-6 py-24 text-center pc:py-32">
      <h1 className="text-3xl font-semibold">ページが見つかりません</h1>
      <p className="mt-4 text-foreground/70">
        お探しのページは存在しないか、移動または削除された可能性があります。
      </p>
      <Link href="/" className="mt-8 text-accent hover:underline">
        トップページに戻る
      </Link>
    </div>
  );
}
