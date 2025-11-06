import type { Skill } from "@/types/type";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryLabels: Record<Skill["category"], string> = {
  language: "言語",
  framework: "フレームワーク・ライブラリ",
  tool: "ツール",
  infrastructure: "インフラ・クラウド",
  middleware: "ミドルウェア",
  cms: "CMS",
  cicd: "CI/CD",
  other: "その他",
};

function groupSkillsByCategory(skills: Skill[]): Map<Skill["category"], Skill[]> {
  const grouped = new Map<Skill["category"], Skill[]>();
  skills.forEach((skill) => {
    const existing = grouped.get(skill.category) || [];
    grouped.set(skill.category, [...existing, skill]);
  });
  return grouped;
}

function renderStars(level?: number): string {
  if (!level) return "";
  return "⭐️".repeat(level);
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) {
    return null;
  }

  const groupedSkills = groupSkillsByCategory(skills);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-black dark:text-white sm:text-2xl">
          技術スタック
        </h2>
        <div className="mt-1 text-xs text-black/40 dark:text-white/40 sm:text-sm">
          <span className="block sm:inline">⭐️：学習経験or個人開発での使用経験あり</span>
          <span className="hidden sm:inline"> / </span>
          <span className="block sm:inline">⭐️⭐️：実務経験あり</span>
          <span className="hidden sm:inline"> / </span>
          <span className="block sm:inline">⭐️⭐️⭐️：実務で自走でき、レクチャー可能</span>
        </div>
      </div>
      <div className="space-y-8">
        {Array.from(groupedSkills.entries()).map(([category, categorySkills]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-base font-medium text-black/80 dark:text-white/80 sm:text-lg">
              {categoryLabels[category]}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categorySkills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col gap-1 rounded-md border border-black/10 bg-white px-3 py-1.5 text-sm text-black sm:flex-row sm:items-center sm:justify-between sm:gap-1.5 dark:border-white/10 dark:bg-black dark:text-white"
                >
                  <span className="truncate">{skill.name}</span>
                  {skill.level && (
                    <span className="shrink-0 text-xs sm:text-xs" aria-label={`レベル${skill.level}`}>
                      {renderStars(skill.level)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
