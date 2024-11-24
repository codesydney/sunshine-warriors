import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FFB80E',
          secondary: '#EAC23B',
          accent: '#D65947',
          neutral: '#333E50',
          'base-100': '#FFFFFF',
        },
      },
      'light',
    ],
  },
}
export default config
