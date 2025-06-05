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
				dos: ["PressStart2P", "monospace"],
			},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
      },
    },
  },
  plugins: [],
};
export default config;
