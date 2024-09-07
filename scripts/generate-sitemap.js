import SitemapGenerator from "sitemap-generator";

const generator = SitemapGenerator("https://www.leohaddou.com", {
  stripQuerystring: true,
  filepath: "./public/sitemap.xml",
});

generator.on("done", () => {
  console.log("Sitemap généré avec succès !");
});

generator.start();
