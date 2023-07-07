module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  {
    name: "strapi::public",
    enabled: true,
    options: {
      maxAge: 3600,
      etag: true,
      lastModified: true,
      cacheControl: "public",
      expires: true,
    },
  },
];
