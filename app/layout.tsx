import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import '../globals.css'

import Footer from '../components/Footer'
import HelpDocsCTA from '../components/HelpDocsCTA'
import WikiLogo from '../components/WikiLogo'
import { CURRENT_VERSION_STRING, GITHUB_REPO, SITE_DESCRIPTION, SITE_NAME, SITE_OPEN_GRAPH, SITE_URL } from '../site'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_NAME,
		template: `${SITE_NAME} | %s`,
	},
	description: SITE_DESCRIPTION,
	robots: {
		index: true,
		follow: true,
	},
	icons: '/favicon.ico',
	openGraph: {
		...SITE_OPEN_GRAPH,
		title: SITE_NAME,
	},
}

export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<Head color={{ hue: 133, saturation: 100 }} />
			<body>
				<Layout
					banner={
						<Banner storageKey={CURRENT_VERSION_STRING}>
							<a href="https://github.com/Kareadita/Kavita/releases/latest" target="_blank">
								🎉 Kavita v{CURRENT_VERSION_STRING} is released. Read more →
							</a>
						</Banner>
					}
					navbar={
						<Navbar logo={<WikiLogo />} projectLink="https://github.com/Kareadita/Kavita" chatLink="https://discord.gg/b52wT37kt7">
							<ThemeSwitch className="hidden md:inline-block" />
						</Navbar>
					}
					pageMap={await getPageMap()}
					docsRepositoryBase={`${GITHUB_REPO}/tree/main`}
					editLink={<HelpDocsCTA />}
					feedback={{ content: null }}
					footer={<Footer />}
				>
					{children}
				</Layout>
			</body>
		</html>
	)
}
