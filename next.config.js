module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  publicRuntimeConfig: {
    APP_NAME: 'Heidelberg Pastry Shop',
    API_DEV: 'http://localhost:1337/api',
    IMAGE_API_DEV: 'http://localhost:1337/api',
    // API_PRODUCTION: 'https://www.p1s.us/api',
    API_PRODUCTION: 'https://www.p1sdev.us/api',
    IMAGE_API_PRODUCTION: 'https://www.p1sdev.us',
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    // DOMAIN_PRODUCTION: 'https://www.p1s.us',
    DOMAIN_PRODUCTION: 'https://www.p1sdev.us',
    SECURE_COOKIE_PRODUCTION: true,
    SECURE_COOKIE_DEV: false,
  },
};
