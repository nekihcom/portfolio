import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Skill {
  name: string;
  level: "初級" | "中級" | "上級";
  category: string;
}

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

/**
 * スキル情報を表示するカードコンポーネント
 * 
 * @param skill - スキル情報
 * @param className - 追加のCSSクラス
 */
export function SkillCard({ skill, className = "" }: SkillCardProps) {
  const getBadgeVariant = (level: Skill["level"]) => {
    switch (level) {
      case "上級":
        return "default" as const;
      case "中級":
        return "secondary" as const;
      case "初級":
        return "outline" as const;
      default:
        return "secondary" as const;
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{skill.name}</CardTitle>
          <Badge variant={getBadgeVariant(skill.level)}>
            {skill.level}
          </Badge>
        </div>
        <CardDescription>{skill.category}</CardDescription>
      </CardHeader>
    </Card>
  );
} 