const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/wiki" : "";

const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
};

module.exports = nextConfig,
}
