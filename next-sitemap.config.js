 /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kranthi-portfilo.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000, // all pages in one sitemap if under 5000
  outDir: './public', // output to public folder
};
