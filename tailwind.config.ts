import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				dos: ["var(--font-dos)", "monospace"],
			},
      colors: {
				dos: {
					blue: "hsl(240, 100%, 34%)",
					red: "hsl(0, 100%, 50%)",
					black: "hsl(0, 0%, 0%/)",
					white: "hsl(0,0%, 100%)",
					cyan: "hsl(180, 100%, 50%)",
					lightGray: "hsl(0, 0%, 75%)",
					green: "hsl(120, 100%, 50%)",
					yellow: "hsl(60, 100%, 50%)",
				},
				projects: {
					backgroundNavy: "hsl(220, 60%, 10%)",
					titleRed: "hsl(0, 100%, 35%)",
					headerRed: "hsl(10, 90%, 50%)",
					borderGray: "hsl(0, 0%, 70%)",
					black: "hsl(0, 0%, 0%)",
					white: "hsl(0, 0%, 100%)",
				},
      },
			screens: {
				xsphone: "375px",
				xs: "400px",
			},
    },
  },
  plugins: [],
};
export default config;
