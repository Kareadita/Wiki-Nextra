import { useRouter } from 'next/router'
import { Navbar as NextraNavBar, ThemeSwitch } from 'nextra-theme-docs'

const docLinks = [
	/*
	{
		href: 'https://demo.kavitareader.com/login?apiKey=9003cf99-9213-4206-a787-af2fe4cc5f1f',
		route: 'demo',
		title: 'Demo',
		type: 'page',
		newWindow: true,
	},	*/
	{
		href: '/installation/getting-started',
		route: 'installation',
		title: 'Installation',
		type: 'page',
	},
	{
		href: '/guides',
		route: 'guides',
		title: 'Guides',
		type: 'page',
	},

]

type Props = React.ComponentProps<typeof NextraNavBar>
export default function NavBar(props: Props) {
	const { asPath } = useRouter()

	if (asPath === '/') {
		const alreadyHasItems = props.items.some(
			(item) => item.route === 'installation' || item.route === 'guides',
		)

		if (!alreadyHasItems) {
			// @ts-expect-error: its fine
			props.items.push(...docLinks)
		}
	}

	return <NextraNavBar {...props} />
}

export function ExtraContent() {
	return <ThemeSwitch className="hidden md:inline-block" />
}
