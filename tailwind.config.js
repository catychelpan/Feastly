/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      grotesk: ['Soyuz Grotesk'],
      roboto: ['Roboto'],
    },
    fontSize: {
      sm: '18px',
      base: '22px',
      lg: '25px',
      xl: '28px',
      '2xl': '44px',
      '3xl': '50px',
      '4xl': '56px',
      '5xl': '76px',
      '6xl': '100px',
    },
    extend: {
      colors: {
        dark: '#262626',
        primary: '#CAE78E',
        primary_light: '#E0F5B3',
        secondary: '#BCC6F4',
        secondary_light: '#E4E9FF',
        white: '#FCFCFC',
        white_inactive: '#CECECE',
      },
      boxShadow: {
        '3xl': '6px 6px 0px 0px rgba(58, 58, 58, 1);',
      },
    },
  },
  plugins: [],
}
