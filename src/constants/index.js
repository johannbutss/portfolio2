import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../assets";

export const navLists = ["Mon Portfolio"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Reproduction fidèle.",
      "Cover SCH x Hamza Fade UP.",
      "Un travail précis, un rendu exact.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "Réinterprétation créative.",
      "JVLIVS 3 en photomanipulation.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Mix photo et dessin.",
      "Projet Sokra 'Propagande'.",
      "Un style unique, une esthétique marquante.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "Ambiance post-apocalyptique.",
      "34murphy, ailes dans le dos.",
      "Un univers sonore et visuel puissant.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const sourceCode = "";
