interface SkillTag {
  label: string;
  emoji: string;
}

interface SkillTagsProps {
  skills: SkillTag[];
  className?: string;
}

/**
 * スキルタグコンポーネント
 * スキルをタグ形式で表示
 * 
 * @param skills - スキル配列
 * @param className - 追加のCSSクラス
 */
export function SkillTags({
  skills,
  className = ""
}: SkillTagsProps) {
  return (
    <>
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium border border-teal-200"
        >
          {skill.emoji} {skill.label}
        </span>
      ))}
    </>
  );
} 