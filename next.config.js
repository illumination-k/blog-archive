const path = require("path")

const i18n = {
  locales: ["ja", "en"],
  defaultLocale: "ja"
}

const nextConfig = {
  i18n: i18n,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      // {
      //   source: "/posts",
      //   destination: "/posts/1",
      //   permanent: true,
      // },
      {
        source: "/posts/:slug*",
        destination: "/techblog/:slug*",
        permanent: true,
      }
    ];
  },

  webpack(config, options) {
    config.resolve.alias["@component"] = path.join(__dirname, "component");
    config.resolve.alias["@libs"] = path.join(__dirname, "libs");

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  }
};

module.exports = nextConfig;