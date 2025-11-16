import Link from "next/link";

interface MoreLinkProps {
  href: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  className?: string;
}

export function MoreLink({
  href,
  target = "",
  rel = "",
  children = "もっと知りたい / MORE →",
  className = "",
}: MoreLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`text-sm text-primary underline-offset-4 transition-opacity hover:underline hover:opacity-70 dark:text-primary ${className}`}
    >
      {children}
    </Link>
  );
}
