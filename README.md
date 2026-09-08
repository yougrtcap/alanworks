# Alanworks website recovery

This is a static recovery of the public Alan works website, prepared so the
site can be hosted without depending on the old Vercel/Next.js project.

## Current site

- 1 Day price changed from `500円` to `1,000円`.
- The canonical public URL is `https://alan-works.net/`.
- `plus/` and `manabi-ai/` are separate projects and are ignored by this repository.
- Responsive WebP images are served with the original files as fallbacks.
- Alanworks Plus is linked at `https://plus.alan-works.net/`.

## Low fixed-cost hosting options

- GitHub Pages: no additional hosting fee for a public static repository.
- Cloudflare Pages: no additional hosting fee for a small static site on the free plan.

Vercel Hobby is technically free, but Vercel's fair use guidance restricts Hobby
teams to non-commercial personal use. For a business site, use Vercel Pro or
choose a static host that permits the intended use on its free plan.

## GitHub Pages domain setup

The repository includes:

- `CNAME` for `alan-works.net`
- `.nojekyll` to publish files exactly as-is
- `robots.txt`
- `sitemap.xml`

Set the GitHub Pages custom domain to `alan-works.net`, then configure DNS
in Cloudflare:

- `www` CNAME -> `yougrtcap.github.io`
- `@` A -> `185.199.108.153`
- `@` A -> `185.199.109.153`
- `@` A -> `185.199.110.153`
- `@` A -> `185.199.111.153`

Keep the Lolipop mail records in the same Cloudflare DNS zone. The website can
be hosted on GitHub Pages while mail continues to use Lolipop.

## Google Analytics 4

The main site uses the dedicated GA4 property `Alan works 本サイト`, web stream
`Alan works 公式サイト` (measurement ID `G-P9EVTXMH6V`). Its timezone is Japan
and currency is JPY. The homepage, article index, and five articles carry this ID.
Alanworks Plus and Recollection retain their separate properties.

`assets/analytics.js` records standard page views and `line_click` / `plus_click`.
The published canonical URL identifies the originating page; page query strings,
fragments, and referrer paths are excluded. Google signals and ad personalization
are disabled. The stream's enhanced automatic measurement is disabled.
LINE clicks measure navigation intent, not messages sent, friend additions, or contracts.

The homepage includes the Search Console HTML verification tag for the
`https://alan-works.net/` URL-prefix property. Keep the tag to retain verification.
