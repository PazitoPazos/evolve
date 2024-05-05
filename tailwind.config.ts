import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3D3D3D',
          DEFAULT: '#242424',
          dark: '#171717',
        },
        secondary: {
          light: '#1F3E6F',
          DEFAULT: '#142747',
          dark: '#0F1C34',
        },
        accent: {
          light: '#D63D5C',
          DEFAULT: '#BA2845',
          dark: '#7F1128',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        loader: {
          '0%, 100%': { transform: 'translateX(-120px)' },
          '100%': { transform: 'translateX(960px)' },
        },
      },
      animation: {
        loader: 'loader 5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
