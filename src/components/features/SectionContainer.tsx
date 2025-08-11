import { SectionTitle } from "./SectionTitle";

interface SectionContainerProps {
  titleEn?: string;
  titleJa?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ 
  titleEn="", 
  titleJa="", 
  className="",
  children 
}: SectionContainerProps) => {
  return (
    <section className={`mb-[10rem] ${className}`}>
      <SectionTitle titleEn={titleEn} titleJa={titleJa} className="mb-10" />
      {children}
    </section>
  );
};