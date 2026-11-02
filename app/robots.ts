import type { MetadataRoute } from 'next'

import { SITE_URL } from '../site'

// next build with output: 'export' fails on a metadata route without this
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: '*', allow: '/' },
		sitemap: `${SITE_URL}/sitemap.xml`,
	}
}
