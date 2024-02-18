import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Times New Roman, sans-serif",
    mono: "Times New Roman, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
      },
    },
  },
});

export default customTheme;
