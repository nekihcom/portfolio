"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-col items-center px-6 py-24 text-center pc:py-32">
      <h1 className="text-3xl font-semibold">エラーが発生しました</h1>
      <p className="mt-4 text-foreground/70">
        しばらくしてから再度お試しください。
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 text-accent hover:underline"
      >
        再読み込み
      </button>
    </div>
  );
}
