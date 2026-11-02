---
applyTo: "content/**/*.mdx,content/**/_meta.js"
---
# Page review

Each wiki page needs a few things by hand that the build does not check. `CONTRIBUTING.md` explains them. Flag each case below and name the file. Image problems are covered by `images.instructions.md`.

## Flag these
1. **A new or changed page without a `description`.** Every page needs one in its front matter, unless it has `searchable: false`. It is the page's summary in search engines, link previews and `llms.txt`:
   ```mdx
   ---
   description: Set up your own SMTP account so Kavita can send books to devices, invite users and reset passwords.
   ---
   ```
   Also flag a `description` over 160 characters, one that restates the title ("This page is about email"), or one with `: ` that is not in quotes.
2. **Front matter that is not on the first line.** A blank line or an import above the opening `---` makes the block render as page text instead.
3. **No `title` and no `#` heading.** A page that starts at `##` needs `title:` in its front matter, or the browser tab shows the file name (`Kavita Wiki | Mediaissues`).
4. **A new page missing from its folder's `_meta.js`.** It would land at the bottom of the sidebar with a label made from its file name.
5. **A relative link to another wiki page.** `[OPDS](../features/opds)` breaks; it must be `[OPDS](/guides/features/opds)`.
6. **A heading with `<TagBadge>` or `<KavitaPlusBadge />` and no explicit id.** It needs `[#some-id]` at the end: `### Linked to devices <TagBadge major={0} minor={8} patch={9} /> [#linked-to-devices]`.
7. **A deleted or renamed `.mdx` file with no redirect at the old path.** Kavita's UI and outside sites link into the wiki. The old path needs a `<Redirect to="..." />` page.
8. **A redirect page missing any of:** `searchable: false` in its front matter, `"display": "hidden"` in its folder's `_meta.js`, or an MDX comment `{/* ... */}` saying who links to the old URL.

## Do not flag
- Pages with `searchable: false` that have no `description`: redirects and old-link pages are kept out of search on purpose.
- The `index` entry in `content/_meta.js` with `"display": "hidden"`. It hides the landing page from the sidebar.
- Links to `#anchors` on the same page, and links to outside sites.
