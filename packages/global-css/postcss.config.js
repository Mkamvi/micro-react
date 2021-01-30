const prod = process.env.NODE_ENV === 'production';

const plugins = [
  require('stylelint'),
  require('postcss-import'),
  require('postcss-preset-env'),
  require('tailwindcss'),
];
if (prod) {
  plugins.push(require('autoprefixer'));
  plugins.push(require('cssnano'));
}
module.exports = {
  plugins: plugins,
};
