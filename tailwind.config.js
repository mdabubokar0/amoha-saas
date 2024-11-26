/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Define your custom color palette
      primary: "#0049FF", // Main color
      secondary: "#ffed4a", // Accent color
      success: "#38a169",
      warning: "#dd6b20",
      danger: "#e53e3e",
      white: "#ffffff",
      black: "#000000",
      // Add your custom colors
      button: "#3490dc",
      buttonHover: "#0e4adf",
      bgColor: "#fafafa",
      font1: "#1a1a11",
      font2: "#777e90",
      inputBg: "#e7e8ea",
    },

    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      texting: ["Inter", "sans-serif"],
    },

    fontSize: {
      // Define your custom font sizes
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", //24px
      "3xl": "1.875rem", //30px
      "4xl": "2.25rem", //36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", //64px
    },
    fontWeight: {
      regular: "400", // Normal text
      medium: "500", // Slightly bold
      semibold: "600", // For headings
      bold: "700", // Bolder text
      extrabold: "800", // Very bold
    },
    borderRadius: {
      // Define your custom border radius
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    // boxShadow: {
    //   // Define your custom shadows
    //   sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    //   DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    //   md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    //   lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    //   xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    //   "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
    //   inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
    //   none: "none",
    // },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    // animation: {
    //   spin: "spin 1s linear infinite",
    //   ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    //   bounce: "bounce 1s infinite",
    // },

    // screens: {
    //   sm: "475px",

    //   md: "768px",

    //   lg: "1024px",

    //   xl: "1280px",

    //   "2xl": "1536px",
    // },

    // extend: {
    //   opacity: {
    //     15: "0.15",
    //     85: "0.85",
    //   },
    //   zIndex: {
    //     100: "100",
    //     9999: "9999",
    //   },
    //   width: {
    //     128: "32rem",
    //     144: "36rem",
    //   },
    //   height: {
    //     128: "32rem",
    //     144: "36rem",
    //   },
    // },
    extend: {
      backgroundImage: {
        bg1: "linear-gradient(#0049ff 50%, #fff 50%)",
      },
    },
  },
  plugins: [],
};
