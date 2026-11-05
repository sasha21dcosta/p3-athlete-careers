export function FitIndiaBanner({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-full border border-primary/10 bg-gradient-to-r from-secondary/90 via-flare/30 to-secondary/90 px-5 py-4 shadow-sm sm:flex-row sm:gap-5 sm:px-6 sm:py-3.5">
      <img
        src="/fit-india-logo.png"
        alt="Fit India Movement"
        width={120}
        height={48}
        className="h-10 w-auto shrink-0 object-contain sm:h-11"
      />
      <span
        className="hidden h-8 w-px shrink-0 bg-primary/50 sm:block"
        aria-hidden
      />
      <p className="text-center text-xs leading-relaxed text-foreground italic sm:text-left sm:text-sm">
        {text}
      </p>
    </div>
  );
}
