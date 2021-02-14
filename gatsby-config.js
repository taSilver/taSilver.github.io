module.exports = {
  siteMetadata: {
    title: "Tim Silvester | GitHub Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio",
      options: {
        contentPath: `${__dirname}/content` // the path to your markdown files
      }
    }
  ],
};
