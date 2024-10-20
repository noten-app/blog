// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noten-App',
  tagline: 'Academic Data Management made easy',
  favicon: 'https://noten-app.de/favicon.ico',

  url: 'https://blog.noten-app.de',
  baseUrl: '/',

  organizationName: 'noten-app',
  projectName: 'blog',

  onBrokenLinks: 'warn', // Has to be warn because it throws error when linking to page in another language
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: "warn",

  titleDelimiter: "·",

  baseUrlIssueBanner: false,

  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2024 Konstantin Protzen.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://assets.noten-app.de/images/banners/bannerAppLogoLandscape.png',
      navbar: {
        title: 'Noten-App',
        logo: {
          alt: 'Noten-App Logo',
          src: 'https://noten-app.de/src/images/logo-108p.webp',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          { to: 'https://docs.noten-app.de', label: 'Docs', position: 'right' },
          {
            href: 'https://github.com/noten-app/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More about Noten-App',
            items: [
              {
                label: 'Docs',
                to: 'https://docs.noten-app.de',
              },
              {
                label: 'Homepage',
                to: 'https://noten-app.de',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/noten-app",
              },
              {
                label: "Impressum",
                href: "https://noten-app.de/legal/impressum",
              },
              {
                label: "Datenschutzerklärung",
                href: "https://noten-app.de/legal/datenschutz",
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 Konstantin Protzen. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      announcementBar: {
        id: 'eol-announcement',
        content:
          'Noten-App will be <b>discontinued on 31.12.2024</b>. Please read more about this <a href="https://blog.noten-app.de/noten-app-eol">here</a>.',
        backgroundColor: '#f75d4e',
        textColor: '#000000',
        isCloseable: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
