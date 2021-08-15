module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  variants: {},
  plugins: [],
  theme: {
    fontFamily: {
      sans: "Open Sans",
      title: "Raleway",
    },
    colors: {
      pink: {
        // DEFAULT: "#F06CAE",
        // DEFAULT: "#ED2488",
        DEFAULT: "#FF4598",
      },
      blue: {
        DEFAULT: "#6092F0",
        //   // DEFAULT: "#0C59ED",
      },
      green: {
        // DEFAULT:"#00ED00"
        // DEFAULT:"#54F054"
        DEFAULT: "#A8FCA2",
        // DEFAULT: "#83C03E",
        // DEFAULT: "#298F42",
      },
      yellow: {
        // DEFAULT:"#F0E384"
        // DEFAULT:"#B7ED3B"
        // DEFAULT:"#EDB53B"
        // DEFAULT:"#0CED8B"
        DEFAULT: "#24ED24",
      },
      pearl: {
        DEFAULT: "#FFFFFF",
      },
      darky: {
        DEFAULT: "#121212",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "splash-hero": "url('/studentConcert1.jpg')",
        "splash-student": "url('/splash-student.jpg')",
        splash3: "url('/splash3.jpg')",
        "holiday-programme": "url('/holiday-programme.jpeg')",
        concerts: "url('/concerts.jpeg')",
        "splash-info": "url('/mexico1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "logo-dark": "url('/logo-dark.png')",
        "logo-light": "url('/logo-light.svg')",
        "logo-pink": "url('/logo-pink.svg')",
      }),
      spacing: {
        100: "48rem",
        128: "56rem",
        500: "500rem",
      },
    },
  },
};
