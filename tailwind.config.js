/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
  primary:"#465fff",
  light:"#ecf3ff",
  green:"#039855",
  dark:"#d1fadf",
  gray:"#e4e7ec",
  gray1:"#f2f4f7",
  hower:"#3641f5",
  line:"#667085",
      gray3: "#f9fafb",
    gray2: "#d0d5dd",
    textt:"#667085",
    red1:"#d92d20",
    red2:"#fef3f2",
    color1:"#e4e7ec",
    color2:"#475467",
    color3:"#027a48",
    color4:"#ecfdf3"




  
  
},
  screens:{
      sm:"150px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px",
    },

},
  },
  plugins: [],
}

