/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
  },
  i18n:{
    locales:["en", "es"],
    defaultLocale:"es"
  }
}


module.exports = nextConfig
