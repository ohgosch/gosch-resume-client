const HttpBackend = require('i18next-http-backend/cjs');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  reloadOnPrerender: true,
  use: process.browser ? [HttpBackend] : [],
};
