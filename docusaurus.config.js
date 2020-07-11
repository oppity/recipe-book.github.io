module.exports = {
  title: "Recipe Book Docs",
  tagline: "The tagline of my site",
  url: "https://docs.recipebook.dev",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "oppity", // Usually your GitHub org/user name.
  projectName: "recipe-book.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Recipe Books Documentation",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/oppity/recipe-book",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://hub.docker.com/r/oppity/recipe-book",
          label: "Docker Hub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "overview",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/oppity/recipe-book.github.io/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
