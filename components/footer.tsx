export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-display text-foreground/40 text-sm">Krishna Madhiraju</span>
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase">
          © {currentYear} · Wellington, NZ
        </p>
      </div>
    </footer>
  );
}
