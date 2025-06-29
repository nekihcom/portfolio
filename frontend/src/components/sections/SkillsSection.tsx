import { SkillCard, Skill } from "@/components/features/SkillCard";

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  className?: string;
}

/**
 * スキルセクションコンポーネント
 * 技術スタックやスキル一覧を表示
 * 
 * @param skills - スキル情報の配列
 * @param title - セクションタイトル
 * @param className - 追加のCSSクラス
 */
export function SkillsSection({
  skills = [],
  title = "スキル・技術",
  className = ""
}: SkillsSectionProps) {
  // デフォルトのスキルデータ
  const defaultSkills: Skill[] = [
    { name: "Next.js", level: "上級", category: "フロントエンド" },
    { name: "React", level: "上級", category: "フロントエンド" },
    { name: "TypeScript", level: "上級", category: "フロントエンド" },
    { name: "Node.js", level: "中級", category: "バックエンド" },
    { name: "Python", level: "中級", category: "バックエンド" },
    { name: "PostgreSQL", level: "中級", category: "データベース" },
    { name: "AWS", level: "中級", category: "インフラ" },
    { name: "Docker", level: "中級", category: "インフラ" },
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <section className={`container mx-auto px-4 py-16 ${className}`}>
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displaySkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
} 