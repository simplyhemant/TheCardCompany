/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5EF",
        headings: "#292824",
        bodyText: "#45433E",
        secondaryText: "#77736A",
        gold: {
          DEFAULT: "#AD8A48",
          accent: "#AD8A48",
          champagne: "#E8D9B5",
          light: "#FAF4E8",
        },
        silverBorder: "#DED9CC",
        window: {
          DEFAULT: "#FFFFFF",
          inner: "#FCFAF6",
          header: "#FAF8F3",
          border: "#DED9CC",
        },
        card: {
          DEFAULT: "#FAF8F3",
          hover: "#F5F2EA",
          border: "#DED9CC",
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
        'window-warm': '0 16px 48px -12px rgba(69, 67, 62, 0.08), 0 0 0 1px #DED9CC',
        'card-warm': '0 2px 10px -2px rgba(69, 67, 62, 0.04)',
      }
    },
  },
  plugins: [],
}
