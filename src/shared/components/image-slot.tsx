type ImageSlotProps = {
  label: string;
  className?: string;
};

export function ImageSlot({ label, className }: ImageSlotProps) {
  return (
    <div
      className={[
        "flex items-center justify-center rounded-[24px] border border-dashed border-sky-200/80 bg-white/70 text-center text-sm font-medium text-sky-500 shadow-[0_8px_22px_rgba(43,70,118,0.08)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
