module.exports = {
  siteMetadata: {
    siteUrl: "https://azure-web-app-demo.jasonjohns.com",
    title: "Gataby on Azure!",
  },
  plugins: [  "gatsby-plugin-theme-ui",
              "gatsby-plugin-image",
              "gatsby-plugin-sharp",
              {
                resolve: "gatsby-source-filesystem",
                options: {
                  name: `blog`,
                  path: `${__dirname}/blog`,
                }
              },
           ],
};
