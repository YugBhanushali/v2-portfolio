/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust according to your project structure
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode based on the 'class' strategy
  theme: {
    extend: {
      colors: {
        black: "#121212",
        light: "#f5f5f5",
        dark: "#181818",
        primary: {
          light: "#1a73e8",
          dark: "#8ab4f8",
        },
        text: {
          light: "#333",
          dark: "#e5e5e5",
        },
        codeBg: {
          light: "#f0f0f0", // Light mode background for code
          dark: "#1e1e1e", // Dark mode background for code
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text.light"), // Default text color
            a: {
              color: theme("colors.primary.light"),
              "&:hover": {
                color: theme("colors.primary.dark"),
              },
            },
            h1: { color: theme("colors.text.light") },
            h2: { color: theme("colors.text.light") },
            h3: { color: theme("colors.text.light") },
            blockquote: {
              color: theme("colors.text.light"),
              borderLeftColor: theme("colors.primary.light"),
            },
            code: {
              color: theme("colors.primary.light"),
              backgroundColor: theme("colors.codeBg.light"),
              padding: "2px 4px",
              borderRadius: "4px",
            },
            "code::before": false,
            "code::after": false,
            pre: {
              backgroundColor: theme("colors.codeBg.light"),
              color: theme("colors.text.light"),
              borderRadius: "8px",
              padding: "1rem",
              overflowX: "auto", // Horizontal scroll if content is too long
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.text.dark"), // Dark mode text color
            a: {
              color: theme("colors.primary.dark"),
              "&:hover": {
                color: theme("colors.primary.light"),
              },
            },
            h1: { color: theme("colors.text.dark") },
            h2: { color: theme("colors.text.dark") },
            h3: { color: theme("colors.text.dark") },
            h4: { color: theme("colors.text.dark") },
            strong: { color: theme("colors.text.dark") },
            blockquote: {
              color: theme("colors.text.dark"),
              borderLeftColor: theme("colors.primary.dark"),
            },
            code: {
              color: theme("colors.primary.dark"),
              backgroundColor: theme("colors.codeBg.dark"),
              padding: "2px 4px",
              borderRadius: "4px",
              overflowX: "auto",
            },
            "code::before": false,
            "code::after": false,
            pre: {
              backgroundColor: theme("colors.codeBg.dark"),
              color: theme("colors.text.dark"),
              borderRadius: "8px",
              padding: "1rem",
              overflowX: "auto",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")], // Use typography plugin for styling blog content
};
