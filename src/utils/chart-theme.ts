/**
 * Chart Theme Utility
 * Provides CSS-variable-based color tokens for Recharts.
 * Automatically adapts to light/dark mode via CSS variables.
 *
 * Usage:
 *   import { chartColors } from "@/utils/chart-theme";
 *   <Line stroke={chartColors.chart1} ... />
 *
 * Rules:
 * - Never pass hardcoded hex to chart props.
 * - Always use these tokens.
 * - Charts must be wrapped in a glass-card container.
 */

/**
 * Resolves a CSS variable from the document root at runtime.
 * Falls back to a safe default if the variable is not set.
 */
function getCSSVariable(variable: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || fallback;
}

/**
 * Chart color tokens — resolved from CSS variables at runtime.
 * These automatically switch between light and dark theme values.
 */
export const chartColors = {
  get chart1() {
    return getCSSVariable("--chart-1", "#F2A60D");
  },
  get chart2() {
    return getCSSVariable("--chart-2", "#FBBF24");
  },
  get chart3() {
    return getCSSVariable("--chart-3", "#FCD34D");
  },
  get chart4() {
    return getCSSVariable("--chart-4", "#FDE68A");
  },
  get chart5() {
    return getCSSVariable("--chart-5", "#FB923C");
  },
  get primary() {
    return getCSSVariable("--primary", "#F2A60D");
  },
  get accent() {
    return getCSSVariable("--accent", "#FBBF24");
  },
  get mutedForeground() {
    return getCSSVariable("--muted-foreground", "#6B7280");
  },
  get border() {
    return getCSSVariable("--border", "rgba(255,255,255,0.1)");
  },
  get background() {
    return getCSSVariable("--background", "#0B0B0F");
  },
  get foreground() {
    return getCSSVariable("--foreground", "#F7F7F7");
  },
} as const;

/**
 * Standard chart palette array — use for multi-series charts.
 * Order maps to chart-1 through chart-5 CSS tokens.
 */
export function getChartPalette(): string[] {
  return [
    chartColors.chart1,
    chartColors.chart2,
    chartColors.chart3,
    chartColors.chart4,
    chartColors.chart5,
  ];
}
