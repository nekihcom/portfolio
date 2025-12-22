import Image from "next/image";

const iconMap = {
  X: 'x-icon.png',
  GitHub: 'github-icon.png',
  note: 'note-icon.svg',
  Qiita: 'qiita-icon.png',
}

type SocialPlatform = keyof typeof iconMap;

type Props = {
  platform: SocialPlatform;
  url: string;
};

const SocialLinkWithIcon = ({ platform, url }: Props) => {
  return (
    <>
    {platform && url && (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={'/sns/' + iconMap[platform]} alt={platform} width={25} height={25} className="" />
      </a>
    )}
    </>
  );
};

export default SocialLinkWithIcon;