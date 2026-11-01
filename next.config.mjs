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
		loader: 'custom',
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// Next's default minus 2048 and 3840: content images render at most 832px wide, 1664px on a 2x screen
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
	},
	transpilePackages: ['next-image-export-optimizer'],
	env: {
		// Any path containing "public" makes the optimizer also write a WebP copy of every public/ image into public/; this takes static imports only
		nextImageExportOptimizer_imageFolderPath: '.next',
		nextImageExportOptimizer_exportFolderPath: 'out',
		nextImageExportOptimizer_quality: '80',
		nextImageExportOptimizer_storePicturesInWEBP: 'true',
		nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
		nextImageExportOptimizer_generateAndUseBlurImages: 'true',
		nextImageExportOptimizer_remoteImageCacheTTL: '0',
	},
})
