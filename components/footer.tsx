export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm mb-2">© {currentYear} Krishna Madhiraju. All rights reserved.</p>
        <p className="text-muted-foreground text-xs">Built with ❤️ and deployed on GitHub Pages.</p>
      </div>
    </footer>
  )
}
