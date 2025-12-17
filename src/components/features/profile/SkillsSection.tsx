import type { ISkillCategory } from "@/types/type";
import { Badge } from "@/components/ui/badge";

type Props = {
  skills: ISkillCategory[];
};

const SkillsSection = ({ skills }: Props) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">スキル <span className="text-sm text-gray-600"> - Skills -</span></h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-gray-700">•</span>
            <span className="text-gray-900">{skill.items.map((item) => item.name).join(", ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
