// @ts-ignore

const fs = require("fs");
const globby = require("globby");

(async () => {
  const pages = await globby(["pages/**/*{.tsx,.mdx}", "!pages/_*.tsx"]);
  const sitemap = `
    <rss version="2.0">
      <channel>
        <title>Blog by Li Ke</title>
        <link>https://www.li-ke.netlify.com</link>
        <description>Personal portfolio of Li Ke</description>
        <language>en</language>
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("/index", "")
              .replace(".tsx", "")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;
            return `
              <item>
                <link>
                  ${`https://nirmalyaghosh.com${route}`}
                </link>
              </item>
            `;
          })
          .join("")}
      </channel>
    </rss>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
