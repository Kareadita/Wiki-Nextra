import nextra from 'nextra'

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/wiki" : "";

export default withNextra({
	reactStrictMode: true,
	trailingSlash: true,
	assetPrefix,
	basePath: assetPrefix,
	output: "export",
})
