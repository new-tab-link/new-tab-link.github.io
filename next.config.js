// @ts-check

/**
 * @type {import('next').NextConfig}
 **/


const nextConfig = {
  output: "export",
  distDir:"docs",
  publicRuntimeConfig: {
    version:require("./package.json").version,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
