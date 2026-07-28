# Alanworks website recovery

This is a static recovery of the public Alan works website, prepared so the
site can be hosted without depending on the old Vercel/Next.js project.

## Current change

- 1 Day price changed from `500円` to `1,000円`.

## Low fixed-cost hosting options

- GitHub Pages: no additional hosting fee for a public static repository.
- Cloudflare Pages: no additional hosting fee for a small static site on the free plan.

Vercel Hobby is technically free, but Vercel's fair use guidance restricts Hobby
teams to non-commercial personal use. For a business site, use Vercel Pro or
choose a static host that permits the intended use on its free plan.

## GitHub Pages domain setup

The repository includes:

- `CNAME` for `www.alan-works.net`
- `.nojekyll` to publish files exactly as-is
- `robots.txt`
- `sitemap.xml`

Set the GitHub Pages custom domain to `www.alan-works.net`, then configure DNS
in Cloudflare:

- `www` CNAME -> `yougrtcap.github.io`
- `@` A -> `185.199.108.153`
- `@` A -> `185.199.109.153`
- `@` A -> `185.199.110.153`
- `@` A -> `185.199.111.153`

Keep the Lolipop mail records in the same Cloudflare DNS zone. The website can
be hosted on GitHub Pages while mail continues to use Lolipop.
