When should I use getStaticProps?
You should use getStaticProps if:

The data required to render the page is available at build time ahead of a user’s request.
The data comes from a headless CMS.
The data can be publicly cached (not user-specific).
The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.