// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       // typography: (theme: any) => ({
//       //   DEFAULT: {
//       //     css: {
//       //       color: theme("colors.gray.800"),
//       //       a: {
//       //         color: theme("colors.blue.600"),
//       //         "&:hover": {
//       //           color: theme("colors.blue.800"),
//       //         },
//       //       },
//       //       h1: { color: theme("colors.gray.900") },
//       //       h2: { color: theme("colors.gray.900") },
//       //       h3: { color: theme("colors.gray.900") },
//       //       blockquote: { color: theme("colors.gray.900") },
//       //       // code: { backgroundColor: theme("colors.gray.100") },
//       //       code: {
//       //         backgroundColor: theme("colors.gray.100"),
//       //         padding: "0.2rem 0.4rem", // Some padding to make it stand out
//       //         borderRadius: theme("borderRadius.sm"), // Rounded corners
//       //         fontSize: "0.9em", // Slightly smaller font
//       //         fontFamily: "monospace", // Use monospace font for code
//       //       },
//       //       table: {
//       //         width: "100%",
//       //         tableLayout: "auto", // Ensure columns resize correctly
//       //         borderCollapse: "collapse",
//       //         border: "1px solid", // Apply borders around the entire table
//       //         thead: {
//       //           borderBottom: "1px solid", // Add border below the header
//       //         },
//       //         th: {
//       //           border: "1px solid", // Apply borders between columns
//       //           padding: "0.5rem",
//       //           // textAlign: "left", // Align text to the left
//       //         },
//       //         td: {
//       //           border: "1px solid", // Ensure borders between rows and columns
//       //           padding: "0.5rem",
//       //         },
//       //       },
//       //     },
//       //   },
//       //   dark: {
//       //     css: {
//       //       color: theme("colors.gray.100"),
//       //       a: {
//       //         color: theme("colors.blue.400"),
//       //         "&:hover": {
//       //           color: theme("colors.blue.600"),
//       //         },
//       //       },
//       //       h1: { color: theme("colors.gray.100") },
//       //       h2: { color: theme("colors.gray.100") },
//       //       h3: { color: theme("colors.gray.100") },
//       //       blockquote: { color: theme("colors.gray.800") },
//       //       code: {
//       //         backgroundColor: theme("colors.gray.800"),
//       //         color: theme("colors.gray.300"),
//       //       },
//       //       table: {
//       //         width: "100%",
//       //         tableLayout: "auto", // Ensure columns resize correctly
//       //         borderCollapse: "collapse",
//       //         border: "1px solid", // Apply borders around the entire table
//       //         thead: {
//       //           backgroundColor: theme("colors.gray.700"),
//       //           borderBottom: "1px solid", // Add border below the header
//       //         },
//       //         th: {
//       //           border: "1px solid", // Apply borders between columns
//       //           padding: "0.5rem",
//       //           // textAlign: "left", // Align text to the left
//       //           borderColor: theme("colors.gray.600"),
//       //         },
//       //         td: {
//       //           border: "1px solid", // Ensure borders between rows and columns
//       //           padding: "0.5rem",
//       //           borderColor: theme("colors.gray.600"),
//       //         },
//       //       },
//       //     },
//       //   },
//       // }),
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
// };

// export default config;

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
      typography: (theme) => ({
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
