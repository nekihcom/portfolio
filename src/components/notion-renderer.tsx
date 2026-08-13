"use client";

import dynamic from "next/dynamic";
import { NotionRenderer } from "react-notion-x";
import { defaultMapImageUrl } from "notion-utils";
import type { ExtendedRecordMap } from "notion-types";
import type { Block } from "notion-types";

const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

function mapImageUrl(
  url: string | undefined,
  block: Block,
): string | undefined {
  if (R2_PUBLIC_URL && url?.startsWith(R2_PUBLIC_URL)) {
    return url;
  }
  return defaultMapImageUrl(url, block);
}

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code),
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then(
    (m) => m.Equation,
  ),
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  { ssr: false },
);

export function PostRenderer({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={false}
      mapImageUrl={mapImageUrl}
      components={{ Code, Equation, Modal }}
    />
  );
}
