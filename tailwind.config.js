/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
      carPass: "carPass 4s linear infinite",
      softBounce: "softBounce 3s infinite ease-in-out",
    },
    keyframes: {
      carPass: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(700px)" }, // Ajuste o tamanho conforme necessário
      },
      softBounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "60%": { transform: "translateY(-3px)" },
      },
    },
  
  },
  },
  plugins: [],
}