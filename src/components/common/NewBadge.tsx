interface NewBadgeProps {
  className?: string;
}

export function NewBadge({ className = "" }: NewBadgeProps) {
  return (
    <span
      className={`rounded-sm bg-red-500 px-2 py-0.5 text-[10px] font-medium text-white ${className}`}
    >
      NEW
    </span>
  );
}

