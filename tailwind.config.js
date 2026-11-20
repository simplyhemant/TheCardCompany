/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080808",
        window: {
          DEFAULT: "#111113",
          header: "#161618",
          border: "#262629",
          borderSubtle: "#242428",
        },
        card: {
          DEFAULT: "#151518",
          methodology: "#16161A",
          border: "#27272B",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          metallic: "#C5A059",
          dark: "#A38027",
          glow: "rgba(212, 175, 55, 0.15)",
        },
        silver: {
          DEFAULT: "#B8B8BE",
          platinum: "#F5F5F7",
          muted: "#71717A",
          border: "#222226",
          accent: "#3A3A40",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        kicker: '0.18em',
      },
      boxShadow: {
        'window': '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.04), 0 0 40px -10px rgba(212, 175, 55, 0.03)',
        'card-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
