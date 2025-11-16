import Link from "next/link";
import type { Project } from "@/types/type";
import { SectionTitle } from "@/components/common/SectionTitle";

interface ProjectsSectionProps {
  projects: Project[];
}

function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  return `${year}年${parseInt(month, 10)}月`;
}

function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate) return "";
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "現在";
  if (start === end) {
    return start;
  }
  return `${start} - ${end}`;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <SectionTitle>プロジェクト実績</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const content = (
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold  dark:text-white sm:text-lg">
                  {project.title}
                </h3>
                {(project.startDate || project.endDate) && (
                  <time className="text-xs /50 dark:text-white/50 sm:text-sm">
                    {formatDateRange(project.startDate, project.endDate)}
                  </time>
                )}
              </div>
              <p className="text-sm leading-relaxed /70 dark:text-white/70 sm:text-base">
                {project.description}
              </p>
            </div>
          );

          return project.url ? (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-black/10 bg-white p-6 transition-all hover:border-black/20 hover:shadow-md dark:border-white/10 dark:bg-black dark:hover:border-white/20"
            >
              {content}
            </Link>
          ) : (
            <article
              key={index}
              className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
            >
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
