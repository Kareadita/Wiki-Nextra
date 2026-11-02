import type { MetadataRoute } from 'next'

import { getSearchablePages } from '../searchable-pages'
import { SITE_URL } from '../site'

// next build with output: 'export' fails on a metadata route without this
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const pages = await getSearchablePages()
	return pages.map(page => ({
		url: `${SITE_URL}${page.route}`,
		lastModified: page.lastModified,
	}))
}
