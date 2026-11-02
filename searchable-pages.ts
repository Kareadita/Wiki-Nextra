import type { PageMapItem } from 'nextra'
import { getPageMap } from 'nextra/page-map'

export type SearchablePage = {
	route: string
	title: string
	description?: string
	lastModified?: Date
}

export async function getSearchablePages(): Promise<SearchablePage[]> {
	const pages = new Map<string, SearchablePage>()
	collect(await getPageMap(), pages)
	return [...pages.values()]
}

function collect(items: PageMapItem[], pages: Map<string, SearchablePage>) {
	for (const item of items) {
		if ('children' in item) {
			collect(item.children, pages)
			continue
		}
		if (!('route' in item)) continue
		const frontMatter = item.frontMatter ?? {}
		if (frontMatter.searchable === false) continue
		const route = item.route.endsWith('/') ? item.route : `${item.route}/`
		pages.set(route, {
			route,
			title: frontMatter.title ?? item.name,
			description: frontMatter.description,
			lastModified: frontMatter.timestamp ? new Date(frontMatter.timestamp) : undefined,
		})
	}
}
