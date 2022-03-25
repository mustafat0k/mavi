//module.exports = nextConfig
const path = require('path')
/** @type {import('next').NextConfig} */
const dev = true

let domain = ``;
if(dev) domain = `http://localhost:5001`;

module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
    ],
  },
  env:{
    domain,
    storage:`${domain}/public/uploads`,

  }
}

