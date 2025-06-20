/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || 'https://ward-khaddour.vercel.app'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
