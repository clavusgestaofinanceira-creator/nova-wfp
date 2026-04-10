/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-bright": "#faf9f7",
        "on-secondary": "#fbf8f8",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#0d0e0e",
        "on-primary-container": "#525151",
        "on-secondary-fixed-variant": "#5c5b5b",
        "surface-tint": "#5f5e5e",
        "primary": "#5f5e5e",
        "primary-container": "#e5e2e1",
        "tertiary-fixed-dim": "#ebe4dd",
        "surface-container-low": "#f4f4f1",
        "secondary-container": "#e4e2e2",
        "surface-container-high": "#e6e9e6",
        "on-tertiary-container": "#5f5b56",
        "on-primary": "#faf7f6",
        "secondary-fixed": "#e4e2e2",
        "primary-fixed": "#e5e2e1",
        "error-container": "#fe8983",
        "on-primary-fixed": "#403f3f",
        "surface-container": "#edeeeb",
        "surface-container-highest": "#e0e3e0",
        "on-error-container": "#752121",
        "background": "#faf9f7",
        "on-background": "#2f3331",
        "tertiary-container": "#f9f2ec",
        "surface-dim": "#d6dbd7",
        "primary-fixed-dim": "#d6d4d3",
        "tertiary-dim": "#56534e",
        "secondary-fixed-dim": "#d6d4d3",
        "surface-variant": "#e0e3e0",
        "on-primary-fixed-variant": "#5c5b5b",
        "error-dim": "#4e0309",
        "inverse-primary": "#ffffff",
        "tertiary-fixed": "#f9f2ec",
        "tertiary": "#625e59",
        "inverse-on-surface": "#9d9d9b",
        "surface": "#faf9f7",
        "on-surface": "#2f3331",
        "secondary": "#5f5f5f",
        "outline-variant": "#afb3b0",
        "error": "#9f403d",
        "on-tertiary": "#fff8f1",
        "on-secondary-fixed": "#3f3f3f",
        "on-surface-variant": "#5c605d",
        "on-tertiary-fixed": "#4c4944",
        "secondary-dim": "#535353",
        "on-error": "#fff7f6",
        "primary-dim": "#535252",
        "outline": "#777c79",
        "on-tertiary-fixed-variant": "#696660",
        "on-secondary-container": "#525252"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}


