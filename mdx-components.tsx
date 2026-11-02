import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { ZoomImage } from './components/ZoomImage'

const themeComponents = getThemeComponents()

export function useMDXComponents(components?: Record<string, unknown>) {
	return {
		...themeComponents,
		img: ZoomImage,
		...components,
	}
}
