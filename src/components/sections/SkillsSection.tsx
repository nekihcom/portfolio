import type { Skill } from "@/types/type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionContainer } from "@/components/common/SectionContainer";

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

// カテゴリの表示順序を定義
const categoryOrder: Skill["category"][] = [
  "language",
  "framework",
  "middleware",
  "cms",
  "cicd",
  "infrastructure",
  "tool",
  "other",
];

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

  // 定義された順序でカテゴリを並べ替え
  const orderedCategories = categoryOrder.filter((category) =>
    groupedSkills.has(category)
  );

  // 一番上のカテゴリを初期表示時に開く
  const defaultOpenCategory = orderedCategories.length > 0 ? [orderedCategories[0]] : [];

  return (
    <SectionContainer sectionTitle="技術スタック" className="space-y-6">
      <div>
        <div className="mt-1 text-xs dark:text-white/40 sm:text-sm">
          <span className="block sm:inline">⭐️：学習経験or個人開発での使用経験あり</span>
          <span className="hidden sm:inline"> / </span>
          <span className="block sm:inline">⭐️⭐️：実務経験あり</span>
          <span className="hidden sm:inline"> / </span>
          <span className="block sm:inline">⭐️⭐️⭐️：実務で自走でき、レクチャー可能</span>
        </div>
      </div>
      <Accordion type="multiple" className="w-full" defaultValue={defaultOpenCategory}>
        {orderedCategories.map((category) => {
          const categorySkills = groupedSkills.get(category) || [];
          return (
            <AccordionItem key={category} value={category} className="border-b border-black/10 dark:border-white/10">
              <AccordionTrigger className="text-base font-medium hover:no-underline dark:text-white/80 sm:text-lg">
                <span>
                  {categoryLabels[category]}
                  <span className="ml-2 text-sm font-normal dark:text-white/50">
                    ({categorySkills.length})
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                  {categorySkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-row items-center justify-between gap-1.5 rounded-md border border-black/10 bg-white px-3 py-1.5 text-sm dark:border-white/10 dark:bg-black dark:text-white"
                    >
                      <span className="truncate">{skill.name}</span>
                      {skill.level && (
                        <span className="shrink-0 text-xs" aria-label={`レベル${skill.level}`}>
                          {renderStars(skill.level)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </SectionContainer>
  );
}
