import { nightOwl } from 'strapi-code-themes';

export default {
  config: {
    locales: [
      'fr'
    ],
    theme: {
      colors: nightOwl,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
