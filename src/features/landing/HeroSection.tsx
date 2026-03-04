"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ShieldCheck, CloudCheck } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
      {/* Background Gradient — uses existing @utility classes */}
      <div className="gradient-clean-energy dark:gradient-midnight-pulse absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-start gap-8">
            {/* Tagline Badge */}
            <div className="border-accent/20 bg-accent/10 text-accent dark:border-primary/20 dark:bg-primary/10 dark:text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium">
              <span className="bg-accent dark:bg-primary h-2 w-2 animate-pulse rounded-full" />
              <span>Next Gen Education Control</span>
            </div>

            {/* Heading */}
            <h1 className="text-h1 flex flex-col gap-2 leading-none tracking-tight md:text-4xl lg:text-[4rem]">
              <span className="text-foreground font-bold">All the Control.</span>
              <span className="dark:text-gradient-midnight-ember text-gradient-midnight-citrus font-semibold">
                None of the
              </span>
              <span className="dark:text-gradient-midnight-ember text-gradient-midnight-citrus font-bold">
                Complexity.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-body text-muted-foreground md:text-lg">
              Empower your institution with the world&apos;s most intuitive school management
              system. Automate attendance, gradebooks, and parent comms in one unified, futuristic
              dashboard.
            </p>

            {/* CTA Row */}
            <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground dark:bg-primary dark:hover:bg-primary/90 h-12 w-full gap-2 rounded-full px-8 sm:w-auto dark:text-white"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-foreground hover:text-primary group h-12 w-full gap-2 rounded-full px-4 hover:bg-transparent sm:w-auto"
              >
                Compare Systems
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Divider */}
            <div className="from-border h-px w-full bg-linear-to-r to-transparent" />

            {/* Supporting Features Row */}
            <div className="text-muted-foreground flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CloudCheck className="h-4 w-4" />
                <span>No IT overhead</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="glass-card shadow-deep relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl p-8 lg:h-[600px]">
            {mounted ? (
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/assets/icons/landing-page/landing-dark-1.svg"
                    : "/assets/icons/landing-page/landing-light-1.svg"
                }
                alt="EdRithm Dashboard Preview"
                fill
                className="object-contain p-4 transition-opacity duration-500"
                priority
              />
            ) : (
              <div className="bg-muted h-full w-full animate-pulse rounded-xl" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
