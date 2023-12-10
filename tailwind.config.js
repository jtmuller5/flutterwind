import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  corePlugins: {
    preflight: false,
  },
  // prefix: 'fw-'
}

