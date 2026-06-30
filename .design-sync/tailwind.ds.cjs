// Standalone Tailwind config for the extracted design system. Mirrors the
// theme.extend from the repo's tailwind.config.ts but scopes `content` to the
// extracted components, their previews, and the original app source (so every
// utility the components were lifted with is generated). Produces the compiled
// stylesheet wired as cfg.cssEntry.
const animate = require("tailwindcss-animate")

module.exports = {
  darkMode: ["class"],
  content: [
    "./.design-sync/extracted/**/*.{ts,tsx}",
    "./.design-sync/previews/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  // The compiled stylesheet is what claude.ai/design renders against (no JIT at
  // design time), so the full token palette must ship even where no component
  // uses a given utility — the design agent composes layout glue from these.
  safelist: [
    { pattern: /(bg|text|border)-(ink|ember|paper)/, variants: ["hover"] },
    { pattern: /(bg|text|border)-(ink|ember)-(700|800|900|deep)/, variants: ["hover"] },
    { pattern: /(bg|text|border)-(muted-light|muted-dark)/ },
    { pattern: /font-(head|body|mono)/ },
    { pattern: /ease-premium/ },
    "text-white", "text-white/90", "text-white/85", "text-white/80",
    "bg-white", "bg-white/10", "hover:bg-white/10",
    "border-white/20", "border-white/25", "border-white/30",
    "border-ink/15", "border-ink/20",
    "hover:-translate-y-1", "-translate-y-px",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-head)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      colors: {
        ink: {
          DEFAULT: "#0c1b1e",
          700: "#16363d",
          800: "#07242a",
          900: "#04191d",
        },
        ember: {
          DEFAULT: "#ff4d14",
          deep: "#c0320b",
        },
        paper: "#f5f4f0",
        "muted-light": "#65696a",
        "muted-dark": "#a3b8b6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [animate],
}
