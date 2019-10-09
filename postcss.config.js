module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"), // this loads our custom theme
    require("autoprefixer")
  ]
};
