import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    fontFamily: {
      sans: ["Mitr", 'sans-serif'],
      body: ["Pacifico", 'cursive'],
      display: ["Raleway", 'sans-serif'],
     
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
      },
    },
    fontWeight: {
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      xtrabold:'800',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: '#FE5F41',
        secondary: '#4D312C',
        primaryEmphasis:"#ee593d",
        lightPrimary:"#FE5F4120",
        tertiary:"#0F172B",
        body:"#081828",
        lightgray:"#D2D6DC"
      },
      boxShadow: {
        'primaryShadow': `-1px 13px 41px -19px rgba(254,95,65,0.74)`,
        'primaryEmShadow':'-1px 19px 41px -19px rgba(254,95,65,0.74)',
        'sm':' rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    },

  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
