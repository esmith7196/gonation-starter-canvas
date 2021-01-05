module.exports = {
  plugins: [
    {
      resolve: `@gonation/gonation-theme-canvas`,
      options: {
        gonationID: `bzn-FondcnQwSQ_Tz1io2ekLSg`,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          'IGQVJYQ2pTTENiYzlMbm1JTUl1QnE0TDdaSXJ4a2tIUnB4UHliWlpfOXlHamFYVjJ5LVZAoeDAzU1ZAqNUNrdi1YOWw1Tng0bU9tanJCb0NrcERCMk1naEY5dEpvYnhMLVBZAU2FuYkVMWkVteW1rWDl4SwZDZD',
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@gonation/gonation-theme-canvas`],
      },
    },
  ],
};
