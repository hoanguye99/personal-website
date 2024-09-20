import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      slate: colors.slate,
      sky: colors.sky,
      primary: {
        base: '#67e8f9',
        // hover: '#799CEC',
        // pressed: '#1D50C9',
        background: '#38bdf61a',
      },
      typography: {
        title: '#e2e8f0',
        subtitle: '#64748b',
        body: '#94a3b8',
        tag: '#cbd5e1',
      },
    },
    extend: {
      fontSize: {
        'heading-0-sm': [
          '2.25rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '700',
          },
        ],
        'heading-0': [
          '3rem',
          {
            lineHeight: '1',
            fontWeight: '700',
          },
        ],
        'heading-1-sm': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],
        'heading-1': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],
        'heading-2': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '700',
          },
        ],
        title: [
          '1rem',
          {
            lineHeight: '1.25',
            fontWeight: '500',
          },
        ],
        // 'subtitle': [
        //   '18px',
        //   {
        //     lineHeight: '26px',
        //     fontWeight: '400',
        //   },
        // ],
        // 'body-1': [
        //   '18px',
        //   {
        //     lineHeight: '28px',
        //     fontWeight: '400',
        //   },
        // ],
        body: [
          '0.875rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        tag: [
          '0.75rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
export default config
