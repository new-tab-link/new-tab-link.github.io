// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
// import {PHASE_PRODUCTION_BUILD,PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER} from 'next/constants'
const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");
// const nextConfig = {
//   output: "export",
//   distDir:"docs",
//   publicRuntimeConfig: {
//     version:require("./package.json").version,
//   },
//   images: {
//     unoptimized: true,
//   },
// };

const nextConfig = function(){
  const phase = arguments[0]
  console.log('oooooooooooooooooooooooooooo', phase, arguments)
  const distDir = phase == PHASE_PRODUCTION_BUILD ? 'docs': 'dist'
  return {
      output: "export",
      distDir:distDir,
      publicRuntimeConfig: {
        version:require("./package.json").version,
      },
      images: {
        unoptimized: true,
      },
    };
}
module.exports = nextConfig;
