module.exports = {
  purge: {
    enabled: false,
    content: [
      './apps/web/**/*.html',
      './apps/web/**/*.ts',
      './libs/ui/**/*.html',
      './libs/ui/**/*.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
