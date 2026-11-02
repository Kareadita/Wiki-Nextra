import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'

import { getSearchablePages, type SearchablePage } from '../../searchable-pages'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../../site'

// next build with output: 'export' fails on a route handler without this
export const dynamic = 'force-static'

type SidebarItem = { route: string; title: unknown; children?: SidebarItem[] }

export async function GET() {
	const pages = new Map((await getSearchablePages()).map(page => [page.route, page]))
	const { docsDirectories } = normalizePages({ list: await getPageMap(), route: '/' })

	const listed = new Set<string>()
	const sections = docsDirectories.flatMap(item => {
		const lines = pageLines(item, pages, listed, 0)
		return lines.length ? [`## ${titleOf(item, pages)}\n\n${lines.join('\n')}`] : []
	})

	const text = `# ${SITE_NAME}\n\n> ${SITE_DESCRIPTION}\n\n${sections.join('\n\n')}\n`
	return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}

// A folder with a sibling index page (guides.mdx beside guides/) shares that page's route, so it would be listed twice
function pageLines(item: SidebarItem, pages: Map<string, SearchablePage>, listed: Set<string>, depth: number): string[] {
	const page = pages.get(withSlash(item.route))
	const own: string[] = []
	if (page && page.route !== '/' && !listed.has(page.route)) {
		listed.add(page.route)
		own.push(`${'  '.repeat(depth)}- [${page.title}](${SITE_URL}${page.route})${page.description ? `: ${page.description}` : ''}`)
	} else if (!page && item.children?.length && depth > 0 && typeof item.title === 'string') {
		own.push(`${'  '.repeat(depth)}- ${item.title}`)
	}
	const childDepth = own.length ? depth + 1 : depth
	return [...own, ...(item.children ?? []).flatMap(child => pageLines(child, pages, listed, childDepth))]
}

function titleOf(item: SidebarItem, pages: Map<string, SearchablePage>): string {
	return typeof item.title === 'string' ? item.title : (pages.get(withSlash(item.route))?.title ?? item.route)
}

function withSlash(route: string) {
	return route.endsWith('/') ? route : `${route}/`
}
