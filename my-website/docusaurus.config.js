// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
//import docsearch from '@docsearch/js';
//import '@docsearch/css';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Refract",
  favicon: "img/FAVICON.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // future: {
  //   v4: true, // Improve compatibility with the upcoming Docusaurus v4
  // },

  // Set the production url of your site here
  url: "https://judy-refract.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false, //fix

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Judith Etugbo", // Usually your GitHub org/user name.
  projectName: "Refract", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },



  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

      //  Change this section in your config
docs: {
  routeBasePath: "/docs", // Change from "/" to "/docs"
  sidebarPath: "./sidebars.js",
  showLastUpdateTime: true,
  showLastUpdateAuthor: true,
  editUrl:
    "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
},
pages: {
  path: 'src/pages',
  routeBasePath: '/',
}, 
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       
      algolia: {
      // The application ID provided by Algolia
      appId: '2657AGORS0',

      // Public API key: it is safe to commit it
      apiKey: 'fb30561ec2859b7a2142938470f89ae4',

      indexName: 'refractcapstone_project_pages',

      // Optional: see doc section below
      contextualSearch: true,
      },

      liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Refract",
        logo: {
          alt: "My Site Logo",
          src: "img/FAVICON.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
            to: "/docs",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            position: "left",
            label: "API",
          },
           {
            type: "docSidebar",
            sidebarId: "examplesSidebar",
            position: "left",
            label: "Examples",
          },

          {
            type: "docSidebar",
            sidebarId: "changelogSidebar",
            position: "right",
            label: "ChangeLog",
          },

          {
            href: "https://github.com/Nickyshe",
            position: "right",
            html: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `,
            "aria-label": "GitHub repository",
          },

          {
            href: "https://www.linkedin.com/in/etugbo-judith-984545236",
            position: "right",
            html: `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    `,
            "aria-label": "LinkedIn profile",
          },

         { 
        type: 'search',
        position: 'right',
      },

        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },

                {
                label: 'Lenses',
                to: '/docs/lenses',
              },


              {
                label: 'State Management',
                to: '/docs/state-management',
              },

              {
                label: 'Examples',
                to: '/docs/hello-world',
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/judith_etugbo?t=eqQWuj8uDTQMtF5L1UPOVA&s=09",
              },
            ],
          },
          {
            title: "More",
            items: [
            
              {
                label: "GitHub",
                href: "https://github.com/Nickyshe",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,

      },



      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
