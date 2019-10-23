export const theme = {
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    grays: [
      "#f7fafc",
      "#edf2f7",
      "#e2e8f0",
      "#cbd5e0",
      "#a0aec0",
      "#718096",
      "#4a5568",
      "#2d3748",
      "#1a202c"
    ],
    reds: [
      "#fff5f5",
      "#fed7d7",
      "#feb2b2",
      "#fc8181",
      "#f56565",
      "#e53e3e",
      "#c53030",
      "#9b2c2c",
      "#742a2a"
    ],
    oranges: [
      "#fffaf0",
      "#feebc8",
      "#fbd38d",
      "#f6ad55",
      "#ed8936",
      "#dd6b20",
      "#c05621",
      "#9c4221",
      "#7b341e"
    ],
    yellows: [
      "#fffff0",
      "#fefcbf",
      "#faf089",
      "#f6e05e",
      "#ecc94b",
      "#d69e2e",
      "#b7791f",
      "#975a16",
      "#744210"
    ],
    greens: [
      "#f0fff4",
      "#c6f6d5",
      "#9ae6b4",
      "#68d391",
      "#48bb78",
      "#38a169",
      "#2f855a",
      "#276749",
      "#22543d"
    ],
    teals: [
      "#e6fffa",
      "#b2f5ea",
      "#81e6d9",
      "#4fd1c5",
      "#38b2ac",
      "#319795",
      "#2c7a7b",
      "#285e61",
      "#234e52"
    ],
    blues: [
      "#ebf8ff",
      "#bee3f8",
      "#90cdf4",
      "#63b3ed",
      "#4299e1",
      "#3182ce",
      "#2b6cb0",
      "#2c5282",
      "#2a4365"
    ],
    indigos: [
      "#ebf4ff",
      "#c3dafe",
      "#a3bffa",
      "#7f9cf5",
      "#667eea",
      "#5a67d8",
      "#4c51bf",
      "#434190",
      "#3c366b"
    ],
    purples: [
      "#faf5ff",
      "#e9d8fd",
      "#d6bcfa",
      "#b794f4",
      "#9f7aea",
      "#805ad5",
      "#6b46c1",
      "#553c9a",
      "#44337a"
    ],
    pinks: [
      "#fff5f7",
      "#fed7e2",
      "#fbb6ce",
      "#f687b3",
      "#ed64a6",
      "#d53f8c",
      "#b83280",
      "#97266d",
      "#702459"
    ]
  },
  space: [
    "0",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "8rem",
    "10rem",
    "12rem",
    "14rem",
    "16rem"
  ],
  radii: ["0", "0.125rem", "0.25rem", "0.5rem", "9999px"],
  borderWidths: ["0", "1px", "2px", "4px", "8px"],
  shadows: [
    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // NOTE: last 3 entries are candidates for "Variant" naming and correspond to:
    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)", // inner
    "0 0 0 3px rgba(66, 153, 225, 0.5)", // outline
    "none" //none
  ],
  fonts: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
    "2.25rem",
    "3rem",
    "4rem"
  ],
  fontWeights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // NOTE: this array is used for width, height, min-width, min-heights, max-widths, max-heights
  sizes: [
    "0",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "8rem",
    "10rem",
    "12rem",
    "14rem",
    "16rem",
    "auto", // Some of these values like auto should likely be variants 'auto'
    "100%", // 'full'
    "100vh" // 'screen;
  ],
  letterSpacings: ["-0.05em", "-0.025em", "0", "0.025em", "0.05em", "0.1em"], // NOTE: these might be worth aliasing as variants
  lineHeights: ["1", "1.25", "1.375", "1.5", "1.625", "2"], // NOTE: these might be worth aliasing as variants
  zIndices: ["auto", "0", "10", "20", "30", "40", "50"],
  buttons: {
    primary: {
      color: "white",
      bg: "reds.4",
      "&:hover": {
        bg: "reds.6"
      }
    },
    secondary: {
      color: "white",
      bg: "blues.4",
      "&:hover": {
        bg: "blues.6"
      }
    }
  }
};
