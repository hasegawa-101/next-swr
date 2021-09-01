const path = require('path');
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['@src'] = path.join(__dirname, 'src');
    return config;
  },
}
