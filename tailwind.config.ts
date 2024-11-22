import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      underlineOffset: {
        6: '6px',
        10: '10px',
      },
      backgroundImage: {
        'hero-background': "url('/mac.png')",
         
      },
      boxShadow: {
        'blue-2xl': '0 4px 6px rgba(37, 99, 235, 0.5)', 
      },
      
    },
  },
  plugins: [],
} satisfies Config;
