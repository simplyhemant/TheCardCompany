/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: "#09090B",
        window: {
          DEFAULT: "#121215",
          header: "#16161A",
          border: "#26262B",
          subtle: "#1F1F24",
        },
        card: {
          DEFAULT: "#16161A",
          hover: "#1B1B20",
          border: "#27272D",
        },
        gold: {
          DEFAULT: "#D4AF37",
          metallic: "#C5A059",
          light: "#E5C158",
          dark: "#9E7D23",
          badge: "#2A2416",
        },
        silver: {
          DEFAULT: "#A1A1AA",
          light: "#E4E4E7",
          muted: "#71717A",
          border: "#27272D",
          borderHover: "#3F3F46",
        }
      },
      fontFamily: {
        sans: [
          'var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")'
        ],
        mono: [
          'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'
        ]
      },
      letterSpacing: {
        kicker: '0.18em',
      },
      boxShadow: {
        'window-tcc': '0 25px 70px -15px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 50px -10px rgba(212, 175, 55, 0.04)',
        'card-tcc': '0 8px 24px -6px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
