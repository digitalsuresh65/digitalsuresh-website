# Digital Suresh portfolio

A fast, static Astro portfolio for Suresh Man Joshi / Digital Suresh. The site includes Home, About, Services, Blog, Contact, three draft articles, responsive navigation, working blog filters, accessible form validation, SEO metadata, `robots.txt`, and a sitemap.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

Run the full local verification suite with:

```bash
npm run verify
```

## Update business details

Edit `src/config/site.ts` to update:

- location or service area;
- booking URL;
- social profile links;
- personal history, qualifications, and experience;
- consultation copy and service offerings.

Empty booking and social values are intentional. The site does not render dead social links, and it shows a clear booking-setup notice until a real scheduling URL is configured.

## Update blog content

Draft articles live in `src/content/blog/` as Markdown. Review and revise each article, then change `draft: true` to `draft: false` when it is approved. Draft routes include `noindex` metadata, and `/blog/` is excluded in `robots.txt` and the production sitemap until the content is approved. Update those controls when launching approved articles.

## Environment setup

Copy `.env.example` to `.env` and set:

- `PUBLIC_SITE_URL` to the final canonical HTTPS domain;
- `PUBLIC_FORM_ENDPOINT` only if you want to override the built-in FormSubmit endpoint.

The contact form sends inquiries through FormSubmit to `digitalsuresh65@gmail.com` and only shows success after FormSubmit returns a successful response. The first submission triggers a FormSubmit activation email; the recipient must click the confirmation link before inquiry emails are delivered. Keep private API keys on a server; never expose them through `PUBLIC_` environment variables.
