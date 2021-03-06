import { transparentize as fade } from "polished";

export const bright = {
  red: "#D0103A",
  yellow: "#FDC82F",
  blue: "#00338D",
  azure: "#0098DB",
  green: "#008542",
  orange: "#E37222",
};

export const grays = {
  "000": "#FFFFFF",
  "100": "#F5F5F5",
  "200": "#D5D6D2",
  "250": "#9A9B9C",
  "300": "#747678",
  "400": "#666666",
  "500": "#4D4F53",
  "600": "#363636",
  "700": "#222222",
  "800": "#171717",
  "900": "#000000",
};

export const DAY = {
  ...bright,
  background: grays["100"],
  border: {
    content: fade(0.9, grays["900"]),
    divider: grays["200"],
    dividerOpacity: fade(0.85, grays["900"]),
  },
  heading: grays["800"],
  headingSubtle: grays["600"],
  primary: bright.red,
  secondary: bright.azure,
  surface: {
    regular: grays["000"],
    selected: grays["200"],
  },
  text: {
    regular: grays["700"],
    bold: grays["900"],
    subtle: grays["400"],
  },
  title: grays["900"],
  id: "DAY",
};

export const NIGHT = {
  ...bright,
  background: grays["800"],
  border: {
    content: fade(0.9, grays["000"]),
    divider: grays["500"],
    dividerOpacity: fade(0.85, grays["000"]),
  },
  heading: grays["100"],
  headingSubtle: grays["600"],
  primary: bright.red,
  secondary: bright.azure,
  surface: {
    regular: grays["700"],
    selected: grays["600"],
  },
  text: {
    regular: grays["200"],
    bold: grays["000"],
    subtle: grays["300"],
  },
  title: grays["000"],
  id: "NIGHT",
};
