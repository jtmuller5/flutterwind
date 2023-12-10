import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypePrettyCode from "rehype-pretty-code";

import markdoc from "@astrojs/markdoc";

const prettyCodeOptions = {
  theme: "solarized-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Installation",
              link: "/start/installation/",
            },
          ],
        },
        {
          label: "Widgets",
          items: [
            {
              label: "Overview",
              link: "/widgets/widgets/",
            },
            {
              label: "Row",
              link: "/widgets/row/",
            },
          ],
        },
      ],
    }),
    markdoc(),
  ],
});
