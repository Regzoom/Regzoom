/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://localhost:3000',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            }
        ]
    }
    // ...other options
}
