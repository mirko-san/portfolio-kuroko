// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#7414A0",
          secondary: "#424242",
          accent: "#FA9B1E",
          error: "#E7556E",
          info: "#B92CA9",
          success: "#35C5C7",
          warning: "#F8CB5C",
        },
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
