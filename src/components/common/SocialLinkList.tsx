import SocialLinkWithIcon from "@/components/common/SocialLinkWithIcon";

type Props = {
  links: {
    [key: string]: string;
  };
}
const SocialLinkList = ({ links }: Props) => {
  return (
    <ul className="flex gap-8">
      {Object.entries(links).map(([key, value]) => (
        <li key={key}>
          <SocialLinkWithIcon platform={key as "note" | "Qiita" | "X"} url={value} />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinkList;