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
      </Container>
    </>
  );
};

export default DemoPage;
