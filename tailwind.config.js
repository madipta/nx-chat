module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/web/src/**/*.html',
      './apps/web/src/**/*.ts',
      './libs/ui/angular/src/**/*.html',
      './libs/ui/angular/src/**/*.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
