import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "../ThemeToggler";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="glass-overlay sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo representation */}
          <Image
            src="/logo.svg"
            alt="EdRithm Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <span className="text-xl font-bold tracking-tight">
            Ed<span className="text-accent dark:text-primary">Rithm</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#platform"
            className="text-muted-foreground dark:text-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Platform
          </Link>
          <Link
            href="#solutions"
            className="text-muted-foreground dark:text-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground dark:text-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#resources"
            className="text-muted-foreground dark:text-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggler />
          <Button
            variant="outline"
            className="border-border text-foreground rounded-full border bg-white/80 backdrop-blur-md hover:bg-white/90 dark:bg-white/10 dark:hover:bg-white/20"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
