module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_b2: "#ffffffb2",
          A700_33: "#ffffff33",
          A700_cc: "#ffffffcc",
          A700_19: "#ffffff19",
          A700_e5: "#ffffffe5",
          A700: "#ffffff",
        },
        orange: { 100: "#f5ddb7", "100_01": "#f6e2bf", "100_02": "#f3d6ae" },
        gray: {
          800: "#58524a",
          900: "#161618",
          "800_01": "#4f4f4f",
          "900_a5": "#1c1c21a5",
          "700_33": "#56565633",
          "900_02": "#1c1c21",
          "900_01": "#1f1f21",
        },
        deep_purple: { 300: "#aa6be9", A100: "#b577e5" },
        pink: { A100: "#ea6ccd" },
        purple: {
          300: "#eb63d2",
          "300_01": "#af69e8",
          "300_02": "#ce68e1",
          A200: "#da51e7",
        },
        deep_orange: {
          300: "#ec7c5c",
          "300_02": "#ed8a66",
          "300_01": "#ec7b5b",
        },
        blue_gray: { 200: "#9fbecc" },
        black: { "900_33": "#00000033" },
      },
      fontFamily: { montserratalternates: "Montserrat Alternates" },
      backgroundImage: {
        gradient: "linear-gradient(123deg ,#aa6be9,#ec7c5c,#ea6ccd,#f5ddb7)",
        gradient1: "linear-gradient(127deg ,#f6e2bf,#af69e8,#ec7b5b,#eb63d2)",
        gradient2: "linear-gradient(117deg ,#f3d6ae,#da51e7,#ed8a66,#b577e5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
