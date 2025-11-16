interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold dark:border-white/20 dark:text-white">
      {children}
    </h2>
  );
}

