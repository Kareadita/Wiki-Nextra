'use client'

import ExportedImage, { type ExportedImageProps } from 'next-image-export-optimizer'
import { useEffect, useRef, useState } from 'react'
import Zoom from 'react-medium-image-zoom'

const CONTENT_SIZES = '(max-width: 767px) 100vw, (max-width: 1279px) 660px, 832px'

export function ZoomImage(props: ExportedImageProps) {
	const ref = useRef<HTMLImageElement>(null)
	const [insideLink, setInsideLink] = useState(false)

	useEffect(() => {
		setInsideLink(ref.current?.closest('a') != null)
	}, [])

	const { src, alt, title } = props
	const image = typeof src === 'string'
		? <img src={src} alt={alt} title={title} ref={ref} data-pagefind-index-attrs="title,alt" />
		// Next already inlines this blur in the static import; without it ExportedImage fetches its generated 10px file per image
		: <ExportedImage sizes={CONTENT_SIZES} blurDataURL={src.blurDataURL} {...props} ref={ref} data-pagefind-index-attrs="title,alt" />

	if (insideLink) return image

	return (
		<Zoom zoomMargin={40} zoomImg={{ src: typeof src === 'string' ? src : src.src, alt }} wrapElement="span">
			{image}
		</Zoom>
	)
}
