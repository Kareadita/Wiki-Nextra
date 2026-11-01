import type { Metadata } from 'next'

export const GITHUB_REPO = 'https://github.com/Kareadita/Wiki-Nextra'

export const CURRENT_VERSION = {major: 0, minor: 9, patch: 1, build: 0}
export const CURRENT_VERSION_STRING = `${CURRENT_VERSION.major}.${CURRENT_VERSION.minor}.${CURRENT_VERSION.patch}${CURRENT_VERSION.build ? '.' + CURRENT_VERSION.build : ''}`

export const SITE_URL = 'https://wiki.kavitareader.com'
export const SITE_NAME = 'Kavita Wiki'
export const SITE_DESCRIPTION = 'Lightning fast with a slick design, Kavita is a rocket fueled self-hosted digital library which supports a vast array of file formats.'

export const SITE_OPEN_GRAPH: Metadata['openGraph'] = {
	siteName: SITE_NAME,
	description: SITE_DESCRIPTION,
	url: SITE_URL,
	type: 'website',
	locale: 'en_US',
	images: [
		{
			url: 'https://raw.githubusercontent.com/Kareadita/Wiki-Nextra/main/public/homepage-dark3.png',
			alt: SITE_NAME,
			type: 'image/png',
			width: 1332,
			height: 699,
		},
	],
}
