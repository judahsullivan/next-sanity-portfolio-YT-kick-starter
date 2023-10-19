import type { Config } from "tailwindcss";

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue: number }) => {
    if (opacityValue !== undefined) {
      return `rba(var(${variableName})), ${opacityValue}`;
    }
    return `rba(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {},
      backgroundColor: {},
      borderColor: {},
      fill: {},
      keyframes: {},
    },
  },
  plugins: [],
};
export default config;
