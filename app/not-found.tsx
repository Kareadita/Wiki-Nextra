import type { Metadata } from 'next'
import { SkipNavContent } from 'nextra/components'
import { NotFoundPage } from 'nextra-theme-docs'

export const metadata: Metadata = {
	title: 'Page Not Found',
}

export default function NotFound() {
	return (
		<>
			<SkipNavContent />
			<NotFoundPage />
		</>
	)
}
