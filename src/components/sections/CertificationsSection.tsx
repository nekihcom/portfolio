import Link from "next/link";
import type { Certification } from "@/types/type";

interface CertificationsSectionProps {
  certifications: Certification[];
}

function formatDate(dateString: string): string {
  // XXがある場合はそのまま表示
  if (dateString.includes("XX")) {
    return dateString.replace("-XX", "年");
  }
  const [year, month] = dateString.split("-");
  return `${year}年${parseInt(month, 10)}月`;
}

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold  dark:text-white sm:text-2xl">
        資格・認定
      </h2>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-4 rounded-sm border-b border-black/10 pb-4 dark:border-white/10"
          >
            <div className="flex-1">
              {cert.url ? (
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium  hover:/60 dark:text-white dark:hover:text-white/60 sm:text-lg"
                >
                  {cert.name}
                </Link>
              ) : (
                <span className="text-base font-medium  dark:text-white sm:text-lg">
                  {cert.name}
                </span>
              )}
              {cert.issuer && (
                <p className="text-sm /60 dark:text-white/60">
                  {cert.issuer}
                </p>
              )}
            </div>
            <time className="shrink-0 text-sm /50 dark:text-white/50">
              {formatDate(cert.issuedDate)}取得
            </time>
          </li>
        ))}
      </ul>
    </section>
  );
}
