const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/wiki" : "";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
};

module.exports = {
	...withNextra(),
	images: {
    unoptimized: true,
	},
	async redirects() {
		return [
			{
				destination: '/installation/getting-started',
				permanent: true,
				source: '/installation',
			}
		]
	},
}
