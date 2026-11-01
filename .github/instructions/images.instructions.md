---
applyTo: "content/**/*.mdx,components/**/*.tsx,app/**/*.tsx,mdx-components.tsx,globals.css"
---
# Image review

The build turns local images into WebP at several widths, but only when the image is a static import: a markdown image, or `Image` from `next-image-export-optimizer` with an imported `src`. Any other way of showing a local image ships the original PNG/JPEG at full size. Flag each case below and name the file and the image.

## Flag these
1. **`<img>` tag with a local file.** `<img src="/guides/x.png" />` or `<img src="../../public/...">` is never optimized. Use a markdown image, `![Email](../../../public/guides/admin-settings/admin-settings-email.png "Email page")`, or the `Image` component with an import.
2. **`Image` with a string `src`.** `<Image src="/guides/x.png" width={300} height={200} />` requests a WebP that does not exist, gets a 404, then falls back to the full-size original. Import the file and pass the import: `import step1 from '../../../public/guides/x.png'` then `<Image src={step1} alt="..." />`.
3. **`import Image from 'next/image'`.** The site uses a custom image loader, so a plain `next/image` fails the build with `missing "loader" prop`. Use `import Image from 'next-image-export-optimizer'`.
4. **New PNG or JPEG in a CSS `url()`** in `globals.css` or a component style. CSS backgrounds are not optimized; commit them as `.webp`, like the `homepage-*.webp` landing backgrounds.

## Do not flag
- Markdown images (`![alt](path)`), with a relative path or a site-absolute one such as `/guides/x.png`. Both become static imports.
- External images (`https://...`), such as shields.io badges or the PikaPods button. They cannot be optimized at build time.
- `public/homepage-dark3.png`. It is the `og:image` in `site.ts`, linked on GitHub, and stays PNG for link previews.
- `/favicon.ico` in `components/WikiLogo.tsx`.
