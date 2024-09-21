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
};

module.exports = nextConfig;
