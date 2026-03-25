/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0F0F12",      // main background
        secondaryBg: "#6B6E73",    // cards / surfaces
        primaryText: "#F1F2F4",    // main text
        accentGold: "#D6A84F",     // brand accent
        warmBrown: "#8B5E3C",      // warm detail
        softBlue: "#B9D3FF",       // glow effects
      },

      fontFamily: {
        pop: ['Poppins', "sans-serif"],
        clash: ["clash", "sans-serif"],
        clashbold: ["clashBold", "sans-serif"]
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },

      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 4px #B9D3FF) drop-shadow(0 0 10px #B9D3FF)',
            transform: 'scale(1)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 8px #B9D3FF) drop-shadow(0 0 20px #B9D3FF)',
            transform: 'scale(1.1)',
          },
        },
      },

      animation: {
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
        'pulse-glow-fast': 'pulse-glow 1s infinite ease-in-out',
      },
    },
  },
  plugins: [
    // require('tailwindcss'),
    // require('tailwindcss-gradients'),
    // require('tailwindcss-border-gradient'),
  ],
}