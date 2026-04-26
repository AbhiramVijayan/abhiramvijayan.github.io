# SRE Portfolio Website

This is a static multi-page portfolio for an SRE profile with an article section and strong SEO foundations.

## Files you should customize first

- `index.html`
  - Replace all placeholder values for:
    - email
    - phone
    - LinkedIn URL
    - GitHub URL
    - companies and role history
    - certifications
- `articles/index.html`
  - Add or remove article cards
- `articles/*.html`
  - Create one file per article and update metadata
- `sitemap.xml`
  - Replace `https://your-domain.com` with your real domain
- `robots.txt`
  - Ensure the sitemap URL uses your real domain
- `rss.xml`
  - Replace domain and update article feed items

## SEO included

- Semantic HTML structure
- Unique title and description per page
- Canonical URLs per page
- Open Graph and Twitter card tags
- JSON-LD structured data for Person, Blog, and Article
- `sitemap.xml`
- `robots.txt`
- RSS feed for articles

## Add a new article

1. Copy an existing article file in `articles/`.
2. Update:
   - title
   - description
   - URL in canonical and Open Graph
   - published date
   - JSON-LD Article metadata
3. Add a card in `articles/index.html`.
4. Add the new page URL in `sitemap.xml`.
5. Add a new item to `rss.xml`.

## Run locally

Open `index.html` in the browser.

For cleaner local routing behavior, use a static server:

```bash
npx serve .
```
