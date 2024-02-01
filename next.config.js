const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = {
	...withNextra(),
	async redirects() {
		return [
			{
				destination: '/installation/getting-started',
				permanent: true,
				source: '/installation',
			},
			{
				destination: '/guides/overview',
				permanent: true,
				source: '/guides',
			},
		]
	},
}
