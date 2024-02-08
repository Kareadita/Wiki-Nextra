import { useRouter } from 'next/router'

import Footer from './components/Footer'
import Head from './components/Head'
import HelpDocsCTA from './components/HelpDocsCTA'
import NavBar, { ExtraContent } from './components/NavBar'
import WikiLogo from './components/WikiLogo'

export const GITHUB_REPO = 'https://github.com/Kareadita/Wiki-Nextra'
const DOCS_PAGES_HREF = `${GITHUB_REPO}/tree/main/pages`

export default {
	banner: {
		key: '0.7.14',
		text: (
		  <a href="https://github.com/Kareadita/Kavita/releases/tag/v0.7.14" target="_blank">
			🎉 Kavita 0.7.14 is released. Read more →
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
	head: <Head />,
	logo: <WikiLogo />,
	navbar: {
		component: NavBar,
		extraContent: ExtraContent,
	},
	primaryHue: { dark: 133, light: 133 },
	primarySaturation:100,
	project: {
		link: 'https://github.com/Kareadita/Kavita',
	},
	useNextSeoProps() {
		const { asPath } = useRouter()
		if (asPath !== '/') {
			return {
				titleTemplate: '%s | Kavita Wiki',
			}
		}

		return {
			title: 'Kavita',
		}
	},
}