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
    fontSize: {
      'heading-0': [
        '64px',
        {
          lineHeight: '65px',
          fontWeight: '400',
        },
      ],
      'heading-1': [
        '56px',
        {
          lineHeight: '65px',
          fontWeight: '600',
        },
      ],
      'heading-2': [
        '46px',
        {
          lineHeight: '56px',
          fontWeight: '600',
        },
      ],
      'heading-3': [
        '38px',
        {
          lineHeight: '46px',
          fontWeight: '600',
        },
      ],
      'heading-4': [
        '30px',
        {
          lineHeight: '38px',
          fontWeight: '600',
        },
      ],
      'heading-5': [
        '24px',
        {
          lineHeight: '32px',
          fontWeight: '600',
        },
      ],
      'heading-6': [
        '20px',
        {
          lineHeight: '28px',
          fontWeight: '600',
        },
      ],
      'heading-7': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
      'heading-8': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '600',
        },
      ],
      'heading-9': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '600',
        },
      ],
      'title-large': [
        '38px',
        {
          lineHeight: '48px',
          fontWeight: '500',
        },
      ],
      'title-1': [
        '24px',
        {
          lineHeight: '32px',
          fontWeight: '500',
        },
      ],
      'title-2': [
        '20px',
        {
          lineHeight: '28px',
          fontWeight: '500',
        },
      ],
      'title-3': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500',
        },
      ],
      'title-4': [
        '16px',
        {
          lineHeight: '22px',
          fontWeight: '500',
        },
      ],
      'title-5': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '500',
        },
      ],
      'title-6': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'body-1': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: '400',
        },
      ],
      'body-2': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'body-3': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'button-1': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
      'button-2': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500',
        },
      ],
      'button-3': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '500',
        },
      ],
      'button-4': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'button-5': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      'button-6': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'subtitle-1': [
        '18px',
        {
          lineHeight: '26px',
          fontWeight: '400',
        },
      ],
      'subtitle-2': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'subtitle-3': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'subtitle-4': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'subtitle-5': [
        '10px',
        {
          lineHeight: '14px',
          fontWeight: '400',
        },
      ],
      'label-1': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500',
        },
      ],
      'label-2': [
        '16px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'label-3': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '500',
        },
      ],
      'label-4': [
        '14px',
        {
          fontWeight: '400',
          lineHeight: '22px',
        },
      ],
      'label-5': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'placeholder-1': [
        '16px',
        {
          lineHeight: '28px',
          fontWeight: '400',
        },
      ],
      'placeholder-2': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'caption-1': [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      'caption-2': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'caption-3': [
        '10px',
        {
          lineHeight: '14px',
          fontWeight: '400',
        },
      ],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
export default config
