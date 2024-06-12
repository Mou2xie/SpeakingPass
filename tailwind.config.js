/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        main:'#65E3FF',
        pramary:'#2D3748',
        secondary:'#A0AEC0',
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [],
  },
}

