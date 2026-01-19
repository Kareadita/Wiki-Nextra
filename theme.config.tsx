import { useRouter } from 'next/router'

import Footer from './components/Footer'
import HelpDocsCTA from './components/HelpDocsCTA'
import NavBar, { ExtraContent } from './components/NavBar'
import WikiLogo from './components/WikiLogo'

export const GITHUB_REPO = 'https://github.com/Kareadita/Wiki-Nextra'
const DOCS_PAGES_HREF = `${GITHUB_REPO}/tree/main/pages`

export const CURRENT_VERSION = {major: 0, minor: 8, patch: 9, build: 1};
export const CURRENT_VERSION_STRING = `${CURRENT_VERSION.major}.${CURRENT_VERSION.minor}.${CURRENT_VERSION.patch}${CURRENT_VERSION.build ? '.' + CURRENT_VERSION.build : ''}`


export default {
	banner: {
		key: CURRENT_VERSION_STRING,
		content: (
		  <a href="https://github.com/Kareadita/Kavita/releases/latest" target="_blank">
			🎉 Kavita v{CURRENT_VERSION_STRING} is released. Read more →
		  </a>
		)
	},
	chat: {
		link: 'https://discord.gg/b52wT37kt7',
	},
	docsRepositoryBase: DOCS_PAGES_HREF,
	editLink: {
		component: HelpDocsCTA,
	},
	feedback: {
		content: null,
	},
	footer: {
		component: Footer,
	},
	head: ({ title, meta, route }) => {
		const isHome = route === '/';
		const dynamicTitle = isHome ? 'Kavita Wiki' : `Kavita Wiki${title ? (' | ' + title) : ''}`;

		return (
		<>
			<title>{dynamicTitle}</title>
			<meta name="viewport" content="width=device-width" />
			<meta charSet="utf-8" />
			<meta name="robots" content="index,follow" />
			<meta name="description" content="Lightning fast with a slick design, Kavita is a rocket fueled self-hosted digital library which supports a vast array of file formats." />
			<meta property="og:title" content={dynamicTitle} />
			<meta property="og:description" content="Lightning fast with a slick design, Kavita is a rocket fueled self-hosted digital library which supports a vast array of file formats." />
			<meta property="og:url" content="https://wiki.kavitareader.com/" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://raw.githubusercontent.com/Kareadita/Wiki-Nextra/main/public/homepage-dark3.png" />
			<meta property="og:image:alt" content="Kavita Wiki" />
			<meta property="og:image:type" content="image/webp" />
			<meta property="og:image:width" content="1332" />
			<meta property="og:image:height" content="699" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:site_name" content="Kavita Wiki" />
			<link rel="icon" href="/favicon.ico" />
		</>
		);
	},
	logo: <WikiLogo />,
	navbar: {
		component: NavBar,
		extraContent: ExtraContent,
	},
	color: {
		hue: { dark: 133, light: 133 },
		saturation: 100
	},
	project: {
		link: 'https://github.com/Kareadita/Kavita',
	},
}
