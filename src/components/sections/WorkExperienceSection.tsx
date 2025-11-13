import type { WorkExperience } from "@/types/type";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  return `${year}年${parseInt(month, 10)}月`;
}

function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "現在";
  return `${start} - ${end}`;
}

export function WorkExperienceSection({
  workExperience,
}: WorkExperienceSectionProps) {
  if (workExperience.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold dark:text-white sm:text-2xl">
        職歴
      </h2>
      <div className="space-y-8">
        {workExperience.map((exp, index) => (
          <div key={index} className="relative pl-6">
            {/* タイムラインの線 */}
            {index < workExperience.length - 1 && (
              <div className="absolute left-[7px] top-6 h-full w-0.5 bg-black/10 dark:bg-white/10" />
            )}
            {/* タイムラインの点 */}
            <div className="absolute left-0 top-2 size-4 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black" />
            <div className="space-y-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold dark:text-white sm:text-lg">
                    {exp.position}
                  </h3>
                  {!exp.endDate && (
                    <span className="rounded-md bg-black px-2 py-0.5 text-xs font-medium text-white dark:bg-white dark:text-black">
                      現在
                    </span>
                  )}
                </div>
                <p className="text-sm dark:text-white/70 sm:text-base">
                  {exp.company}
                </p>
                <time className="text-xs dark:text-white/50 sm:text-sm">
                  {formatDateRange(exp.startDate, exp.endDate)}
                </time>
              </div>
              <ul className="space-y-1 pl-2">
                {exp.description.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="text-sm dark:text-white/70 sm:text-base before:content-['・']"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-black/10 bg-black/5 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
