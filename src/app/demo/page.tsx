"use client";

import Container from "@/components/common/Container";
import SolidButton from "@/components/ui/buttons/SolidButton";
import OutlineButton from "@/components/ui/buttons/OutlineButton";
import GradientButton from "@/components/ui/buttons/GradientButton";
import IconButton from "@/components/ui/buttons/IconButton";
import UnderlineTextLink from "@/components/ui/links/UnderlineTextLink";
import SlideBackgroundTextLink from "@/components/ui/links/SlideBackgroundTextLink";
import IconSlideTextLink from "@/components/ui/links/IconSlideTextLink";
import WavyUnderlineTextLink from "@/components/ui/links/WavyUnderlineTextLink";
import UnderlinedTextWithArrowLink from "@/components/ui/links/UnderlinedTextWithArrowLink";
import { IWork } from "@/types/type";
import WorkList from "@/components/features/work/WorkList";

// ダミーデータ
const dummyWorks: IWork[] = [
  {
    name: "サンプル　その１",
    thumbnail: "https://picsum.photos/400",
    description: "これはサンプルアプリケーションその1の説明です。長文の可能性があるため、複数行にわたって表示されることを想定しています。このアプリケーションは様々な機能を提供し、ユーザーにとって便利なツールとなっています。",
    techStacks: [
      {
        category: "フロントエンド",
        items: ["React", "TypeScript", "Next.js"],
      },
      {
        category: "バックエンド",
        items: ["Node.js", "Express"],
      },
      {
        category: "インフラ",
        items: ["AWS", "Docker"],
      },
    ],
    images: [
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3",
    ],
  },
  {
    name: "サンプル　その２",
    thumbnail: "https://picsum.photos/400",
    description: "これはサンプルアプリケーションその2の説明です。",
    techStacks: [
      {
        category: "フロントエンド",
        items: ["Vue.js", "JavaScript"],
      },
    ],
    images: [
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5",
    ],
  },
  {
    name: "サンプル　その３",
    thumbnail: "https://picsum.photos/400",
    description: "これはサンプルアプリケーションその3の説明です。",
    techStacks: [
      {
        category: "フロントエンド",
        items: ["Angular"],
      },
      {
        category: "バックエンド",
        items: ["Python", "Django"],
      },
    ],
    images: [
      "https://picsum.photos/800/600?random=6",
    ],
  },
];

export const DemoPage = () => {
  return (
    <>
      <Container className="border-2 border-gray-300 rounded-md p-4">
        <h1 className="text-2xl font-bold">Demo Page</h1>
        <div className="py-4">
          <SolidButton href="/">トップページへ</SolidButton>
        </div>
        <div className="py-4">
          <OutlineButton href="/Article">ブログ一覧へ</OutlineButton>
        </div>
        <div className="py-4">
          <GradientButton href="/Article">ブログを見る</GradientButton>
        </div>
        <div className="py-4">
          <IconButton href="/">ホームに戻る</IconButton>
        </div>
        
        {/* パターン1: 基本的な下線付きテキストリンク */}
        <div className="py-4">
          <UnderlineTextLink href="/">トップページへ</UnderlineTextLink>
        </div>
        
        {/* パターン2: 背景色が左から右に広がるテキストリンク */}
        <div className="py-4">
          <SlideBackgroundTextLink href="/Article">ブログ一覧へ</SlideBackgroundTextLink>
        </div>
        
        {/* パターン3: テキストが右に移動してアイコンが表示されるリンク */}
        <div className="py-4">
          <IconSlideTextLink href="/Article">ブログを見る</IconSlideTextLink>
        </div>
        
        {/* パターン4: 波線アンダーラインがアニメーションするリンク */}
        <div className="py-4">
          <WavyUnderlineTextLink href="/">ホームに戻る</WavyUnderlineTextLink>
        </div>
        
        {/* パターン5: テキストに下線付きで矢印が横にあるリンク */}
        <div className="py-4">
          <UnderlinedTextWithArrowLink href="/Article">ブログ記事を見る</UnderlinedTextWithArrowLink>
        </div>

        {/* 実績セクション */}
        <div className="py-8">
          <h2 className="text-xl font-bold mb-4">実績</h2>
          <WorkList works={dummyWorks} />
        </div>
      </Container>
    </>
  );
};

export default DemoPage;
