/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: `hsl(var(--foreground))`,
        background: `hsl(var(--background))`,
        primary: `hsl(var(--primary))`,
      },
      zIndex: {
        header: 100,
      },
    },
  },
  plugins: [],
};
