module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  variants: {},
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: "Open Sans",
        title: "Raleway",
      },
      colors: {
        pink: "#FF4598",

        caca: "#FF4598",

        purple: "#75499D",

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
        white: {
          DEFAULT: "#FFFFFF",
        },
      },
      backgroundImage: (theme) => ({
        "music-in-the-garden": "url('/music_in_the_garden.jpg')",
        "splash-hero": "url('/studentConcert1.jpg')",
        "splash-student": "url('/splash-student.jpg')",
        splash3: "url('/splash3.jpg')",
        "holiday-programme": "url('/holiday-programme.jpeg')",
        concerts: "url('/concerts.jpeg')",
        upcoming: "url('/upcoming.jpeg')",
        "splash-info": "url('/mexico1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "logo-dark": "url('/logo-dark.png')",
        "ccnz-logo": "url('/ccnz-logo.png')",
        "ccnz-logo-black": "url('/ccnz-logo-black.png')",
        "logo-light": "url('/logo-light.svg')",
        "logo-pink": "url('/logo-pink.svg')",
        "nz-2022": "url('/nz-2022.jpg')",
        martin: "url('/martin.jpg')",
        donald: "url('/donald-maurice1.jpeg')",
        gallery: "url('/gallery.jpeg')",
      }),
      spacing: {
        99: "30rem",
        101: "35rem",
        100: "48rem",
        128: "56rem",
        500: "500rem",
      },
    },
  },
};
