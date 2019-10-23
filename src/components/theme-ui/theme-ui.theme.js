export const theme = {
  breakpoints: ["640px", "768px", "1024px", "1280px"],
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
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: "inherit",
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    monospace: '"Source Code Pro", monospace'
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
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#000",
    background: "#eaeaea",
    primary: "#041e42",
    secondary: "#e35205",
    muted: "#f9f7f4",
    highlight: "#e4e4f2",
    accent: "#e35205",
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
  radii: ["0", "0.125rem", "0.25rem", "0.5rem", "9999px"],
  borderWidths: ["0", "1px", "2px", "4px", "8px"],
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text"
      }
    },
    secondary: {
      color: "background",
      bg: "secondary"
    }
  },
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: ".2em"
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    },
    display: {
      // extends the text.heading styles
      variant: "text.heading",
      fontSize: [6, 7, 8],
      fontWeight: "display"
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)"
    }
  },

  // The styles nested object is specific for content rendered in MDX
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "`heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
