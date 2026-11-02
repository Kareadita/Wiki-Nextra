# Contributing to the Kavita Wiki

This repo is the source of [wiki.kavitareader.com](https://wiki.kavitareader.com). It is built with [Nextra](https://nextra.site) and published to GitHub Pages every time `main` changes, so a merged pull request is live a few minutes later.

To contribute to Kavita itself, see [How to Contribute](https://wiki.kavitareader.com/contributing/) instead.

## Run it locally

You need Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000, reloads as you edit
npm run build    # the full site in out/, the same build the deploy runs
```

Every pull request is built by the **Build site** check, and it has to pass before the pull request can merge. A broken import, a typo in `_meta.js` or a bad image path fails it. Running `npm run build` yourself first catches the same problems sooner.

On Windows, `npm run build` can fail with `EMFILE: too many open files` after the pages are generated. That comes from Next.js opening too many files at once, not from your change. The pull request check builds on Linux, where this does not happen.

Search only works after a build. In `npm run dev` it searches the last build's text.

## Adding a page

Every `.mdx` file under `content/` is a page, and its path is its URL:

| File | URL |
|---|---|
| `content/guides/features/opds.mdx` | `/guides/features/opds/` |
| `content/kavita+/faq.mdx` | `/kavita+/faq/` |

A new page needs four things.

### 1. Front matter

The file starts with a front matter block on its very first line, before any import or blank line:

```mdx
---
title: Email Tab
description: Set up your own SMTP account so Kavita can send books to devices, invite users and reset passwords.
---
import { Callout } from 'nextra/components'

# Email Tab
```

- **`description`** (required): one line, under 160 characters, saying what the page lets the reader do. It is what search engines, link previews (Discord, Slack) and AI assistants show for the page. Wrap it in quotes if it contains `: `.
- **`title`**: needed when the page has no `#` heading. The browser tab reads `Kavita Wiki | <title>`. Without a title or a `#` heading it falls back to the file name, `Kavita Wiki | Mediaissues`.

### 2. A `_meta.js` entry

Each folder has a `_meta.js` that sets the sidebar order and labels. Add your page where it belongs:

```js
export default {
	"general": "General",
	"email": "Email",
	"my-new-page": "My New Page",
}
```

A page missing from `_meta.js` still builds, but lands at the bottom of the sidebar with a label made from its file name.

### 3. Images in `public/`

Put screenshots in `public/`, in the folder that mirrors the page: images for `content/guides/admin-settings/email.mdx` go in `public/guides/admin-settings/`. Commit PNGs; the build turns them into WebP at several sizes.

Only two ways of adding an image get that treatment:

```mdx
![Email settings](../../../public/guides/admin-settings/admin-settings-email.png "Email page")
```

```mdx
import Image from 'next-image-export-optimizer'
import step1 from '../../../public/guides/admin-settings/step1.png'

<Image src={step1} alt="Step 1" />
```

The number of `../` matches how deep the page is under `content/`. An `<img src="/...">` tag, or `<Image>` with a string `src`, ships the full-size PNG. `import Image from 'next/image'` fails the build.

### 4. Absolute links

Link to other wiki pages from the site root: `[OPDS](/guides/features/opds)`, not `[OPDS](../features/opds)`. Relative links resolve against the wrong folder and break.

## Badges

A heading for a Kavita+ feature gets `<KavitaPlusBadge />`, and a heading for a newly added feature gets a version badge. Give any heading with a badge an explicit id, so its link does not change with the badge:

```mdx
import { TagBadge } from '../../../components/TagBadge'

### Linked to devices <TagBadge major={0} minor={8} patch={9} /> [#linked-to-devices]
```

## Moving or renaming a page

Kavita's own UI and many outside sites link into the wiki, so a URL that is live must keep working. When you move a page, leave a redirect at the old path:

```mdx
---
searchable: false
---

import { Redirect } from '../../components/Redirect'

{/* Kavita's UI links here (WikiLink.Updating in UI/Web/src/app/_models/wiki.ts), the guide lives under /installation */}

<Redirect to="/installation/updating/" />
```

- The comment says who links to the old URL. Without it the page looks unused and gets deleted.
- `searchable: false` keeps it out of search, the sitemap and `llms.txt`.
- Hide it in its folder's `_meta.js`: `"updating": { "display": "hidden" }`.

## Callouts, steps and tabs

They come from `nextra/components`:

```mdx
import { Callout, Steps, Tabs } from 'nextra/components'

<Callout type="warning">
  Back up your database before upgrading.
</Callout>
```

Leave out `emoji` on a callout unless it adds meaning beyond the type's own icon.
