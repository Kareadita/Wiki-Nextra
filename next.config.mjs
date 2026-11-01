import nextra from 'nextra'

const withNextra = nextra({
	search: { codeblocks: true },
})

//const isProduction = process.env.NODE_ENV === "production";
//const assetPrefix = isProduction ? "/wiki" : "";

export default withNextra({
	reactStrictMode: true,
	trailingSlash: true,
//	assetPrefix,
	basePath: '',
	output: "export",
	images: {
		unoptimized: true,
	},
})
