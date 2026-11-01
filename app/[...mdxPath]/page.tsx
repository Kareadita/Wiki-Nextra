import type { Metadata } from 'next'
import { generateStaticParamsFor, importPage } from 'nextra/pages'

import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { SITE_NAME, SITE_OPEN_GRAPH } from '../../site'

type PageProps = {
	params: Promise<{ mdxPath: string[] }>
}

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const params = await props.params
	const { metadata } = await importPage(params.mdxPath)
	const fullTitle = metadata.title ? `${SITE_NAME} | ${metadata.title}` : SITE_NAME
	return {
		...metadata,
		// A page-level openGraph replaces the layout's whole object, so the site fields are repeated here
		openGraph: {
			...SITE_OPEN_GRAPH,
			title: fullTitle,
		},
	}
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: PageProps) {
	const params = await props.params
	const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath)
	return (
		<Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
			<MDXContent {...props} params={params} />
		</Wrapper>
	)
}
