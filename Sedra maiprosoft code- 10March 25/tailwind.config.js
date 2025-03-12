// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Adjusted path

//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   // darkMode: "class",
//   darkMode: false,

//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//     },

//     screens: {
//       xs: "450px",
//       // => @media (min-width: 450px) { ... }

//       sm: "575px",
//       // => @media (min-width: 576px) { ... }

//       md: "768px",
//       // => @media (min-width: 768px) { ... }

//       lg: "992px",
//       // => @media (min-width: 992px) { ... }

//       xl: "1200px",
//       // => @media (min-width: 1200px) { ... }

//       "2xl": "1400px",
//       // => @media (min-width: 1400px) { ... }
//     },
//     extend: {
//       colors: {
//         current: "currentColor",
//         transparent: "transparent",
//         white: "#FFFFFF",
//         black: "#121723",
//         dark: "#1D2430",
//         primary: "#4A6CF7",
//         yellow: "#FBB040",
//         green:"#32CD32",
//         maipro:"#40E0D0",
//         blue:"#0e4dc4",
//         imagination: '#9b59b6', // Purple color for Imagination
//         reality: '#2ecc71', 
//         submneu:"#8bbac0",
//         blue500:"#60A5FA",
//         black:' #000000',
//         "bg-color-dark": "#171C28",
//         "body-color": {
//           DEFAULT: "#788293",
//           dark: "#959CB1",
//         },
//         stroke: {
//           stroke: "#E3E8EF",
//           dark: "#353943",
//         },
//         gray: {
//           ...colors.gray,
//           dark: "#1E232E",
//           light: "#F0F2F9",
//         },
//       },
//       animation: {
//         rotating: 'rotate 4s linear infinite',
//       },
//       keyframes: {
//         rotate: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },

//       boxShadow: {
//         signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
//         one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
//         two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//         sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
//         "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
//         "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
//         submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
//         "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
//         "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
//       },
//       dropShadow: {
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//       },
//     },
//   },
//   plugins: [],
// };
//2
/**
 * 
 *  @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Adjusted path
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  darkMode: false,
  plugins: [
    require("@tailwindcss/typography"),
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontWeight: {
        thin: 100,       // Maps `font-thin` to weight 100
        extralight: 200, // Maps `font-extralight` to weight 200
        light: 300,      // Maps `font-light` to weight 300
        normal: 400,     // Maps `font-normal` to weight 400
        medium: 500,     // Maps `font-medium` to weight 500
        semibold: 600,   // Maps `font-semibold` to weight 600
        bold: 700,       // Maps `font-bold` to weight 700
        extrabold: 800,  // Maps `font-extrabold` to weight 800
        black: 900,      // Maps `font-black` to weight 900
        // Add any custom weights as needed
        superthin: 50,   // Example custom weight class
        ultralight: 150, // Example custom weight class
      },
    
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],  
        quicksand: ['quicksand', 'sans-serif'],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco"]
        
  
      },
      colors: {
        teal: {
          500: '#009ca6ff',
        },
        blueWhite: {
          100: '#e0f7fa', // Light "blue-white" color
        },
      },
      backgroundImage: theme => ({
        'testimonial-gradient': 'linear-gradient(to right, #009ca6ff, #e0f7fa)',
      }),
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        green: "#32CD32",
        mai: "#4763AD",
        maiy:"#ffcc00ff",
        maig:"#a2a2a2ff",
        blue: "#0e4dc4",
        imagination: '#9b59b6', // Purple color for Imagination
        reality: '#2ecc71',
        submneu: "#8bbac0",
        blue500: "#60A5FA",
        black: '#000000',
        maib:'#323333',
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {

      
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },
      
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        // textslide: {
        //   '0%': { transform: 'translateY(100%)' },
        //   '50%': { transform: 'translateY(0)' },
        //   '100%': { transform: 'translateY(-100%)' },
        // },
        textslide: {
          '0%': { transform: 'translateY(100%)' },
          '10%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-200%)' },
          '70%': { transform: 'translateY(-300%)' },
          '90%': { transform: 'translateY(-400%)' },
          '95%': { transform: 'translateY(-400%)' }, // Hold last item briefly
          '100%': { transform: 'translateY(0)' },    // Seamless loop back to start
        },
      },
      animation: {
        rotating: 'rotate 4s linear infinite',
        float: 'float 3s ease-in-out infinite',
        // textslide: 'textslide 9s ease-in-out infinite',
        // textslide: 'textslide 15s ease-in-out infinite', // Slower animation (increased from 9s to 15s)
        textslide: 'textslide 15s ease-in-out infinite',
        typing: 'typing 2s steps(10) 1s forwards, blink 0.75s step-end infinite',
        fadeOut: 'fadeOut 1s forwards',

      },
      // animation: {
      //   'border-color-change': 'borderColorChange 2s infinite',
      // },
      keyframes: {
        borderColorChange: {
          '0%, 100%': { 'border-right-color': '#FFFF00' }, // orange
          '50%': { 'border-right-color': '#009ca6ff' }, // blue
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-animation': 'linear-gradient(to right, #009ca6ff, #0e4dc4)', // Define a custom gradient background
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      backgroundImage: {
        // Define a custom gradient with two colors
        'gradient-motion': 'linear-gradient(270deg, #ff7f50, #1e90ff)', // Use your desired orange and blue hex colors
      },
      animation: {
        'gradient-motion': 'gradient-animation 4s ease infinite',
        textslide: 'textslide 9s ease-in-out infinite',
        'border-color-change': 'borderColorChange 2s infinite',
        'gradient-motion': 'gradient-animation 4s ease infinite',
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },

        },
        textslide: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
    },
  },
  plugins: [],
}
};
