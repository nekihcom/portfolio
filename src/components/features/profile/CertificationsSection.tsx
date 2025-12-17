import type { ICertification } from "@/types/type";

type Props = {
  certifications: ICertification[];
};

const CertificationsSection = ({ certifications }: Props) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">資格 <span className="text-sm text-gray-600"> - Certifications -</span></h3>
      <ul className="space-y-3">
        {certifications.map((certification, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-gray-700">•</span>
            <span className="text-gray-900">{certification.name}</span>
            <span className="text-sm text-gray-600">({certification.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsSection;
