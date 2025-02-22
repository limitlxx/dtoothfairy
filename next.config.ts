import type { NextConfig } from "next";
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, { isServer }) {
    // Add the NodePolyfillPlugin for the client-side build
    if (!isServer) {
      config.plugins.push(new NodePolyfillPlugin());
    }
    
    // Optional: Manually specify fallbacks for specific Node.js built-ins (like `url`)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      url: require.resolve('url/'),
    };

    return config;
  },
  // output: 'export',
};

export default nextConfig;
