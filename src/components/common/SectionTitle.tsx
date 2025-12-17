type Props = {
  title: string;
  subtitle?: string;
}
const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <h2 className="text-2xl font-bold text-gray-900">
      {title}
      {subtitle && <span className="text-sm text-gray-600"> - {subtitle} -</span>}
    </h2>
  );
};

export default SectionTitle;