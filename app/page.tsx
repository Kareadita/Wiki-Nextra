import { SkipNavContent } from 'nextra/components'
import LandingPage from '../components/LandingPage'

export default function Home() {
	return (
		<>
			{/* Target of the navbar's "Skip to content" link, which the docs layout adds on every other page */}
			<SkipNavContent />
			<LandingPage />
		</>
	)
}
