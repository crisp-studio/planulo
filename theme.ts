import { rgba } from "polished";

const brandColor = "#4098D7";
const accentColors = ["#FFFBEA", "#FCE588", "#F7C948", "#CB6E17"];
const neutralColors = ["#00873D", "#3D138D", "#00739D", "#A2423D"];

const statusColors = {
  critical: "#FF4040",
  error: "#FF4040",
  warning: "#FFAA15",
  ok: "#00C781",
  unknown: "#CCCCCC",
  disabled: "#CCCCCC"
};

const darkColors = [
  "#102A43",
  "#243B53",
  "#334E68",
  "#486581",
  "#627D98",
  "#829AB1"
];

const brandColors = [
  "#DCEEFB",
  "#B6E0FE",
  "#84C5F4",
  "#62B0E8",
  "#4098D7",
  "#2680C2",
  "#186FAF",
  "#0F609B",
  "#0A558C",
  "#003E6B"
];

const lightColors = [
  "#F0F4F8",
  "#D9E2EC",
  "#BCCCDC",
  "#9FB3C8",
  "#829AB1",
  "#627D98"
];

const focusColor = accentColors[0];

const colors = {
  active: rgba(221, 221, 221, 0.5),
  black: "#000000",
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: "accent-1",
    light: "brand"
  },
  focus: focusColor,
  placeholder: "#AAAAAA",
  selected: "brand",
  text: {
    dark: "#f8f8f8",
    light: "#444444"
  },
  icon: {
    dark: "#f8f8f8",
    light: "#666666"
  },
  white: "#FFFFFF"
};

// ? Wie kann ich das hier besser typen?

const colorArray = (array: Array<string>, prefix: string) =>
  array.forEach((color: string, index: number) => {
    colors[`${prefix}-${index + 1}`] = color;
  });

colorArray(accentColors, "accent");
colorArray(brandColors, "brand");
colorArray(darkColors, "dark");
colorArray(lightColors, "light");
colorArray(neutralColors, "neutral");
Object.keys(statusColors).forEach(color => {
  colors[`status-${color}`] = statusColors[color];
});

const planulo = {
  global: {
    colors,
    font: {
      family: "'Inter', sans-serif",
      // ? Sollen wir den Font local ablegen, über NPM oder remote?
      face: `
        @font-face {
          font-family: 'Inter';
          src: url("https://rsms.me/inter/inter.css");
        }
      `
    }
  },
  button: {
    border: {
      radius: `8px`
    },
    color: { dark: "light-1", light: "brand-9" },
    primary: {
      color: { dark: "brand-9", light: "light-1" }
    }
  }
};

export default planulo;