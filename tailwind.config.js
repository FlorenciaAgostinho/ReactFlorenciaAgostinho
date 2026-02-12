export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        fionastore: {
          "primary": "#a855f7",
          "secondary": "#22c55e",
          "accent": "#f97316",
          "neutral": "#000000",        
          "neutral-content": "#ffffff", 
          "base-100": "#ffffff",        
          "base-content": "#000000",    
          "dropdown": "#1f2937",        
          "dropdown-content": "#ffffff" 
        },
      },
    ],
  },
}
