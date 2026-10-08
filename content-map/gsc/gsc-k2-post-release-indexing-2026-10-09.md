# GSC K2 — Post-release glossary indexing check

Checked: 9 October 2026 (IST)  
Property: `https://proplogai.com/` URL-prefix  
Method: Direct Google Search Console URL Inspection and Sitemaps UI

## URL Inspection

| URL | GSC result | HTTPS | K2 action |
| --- | --- | --- | --- |
| `https://proplogai.com/glossary/emotion-tracking` | URL is on Google; page is indexed | Served over HTTPS | Requested recrawl after the material revision; GSC added the URL to the priority crawl queue |
| `https://proplogai.com/glossary/consistency-rule` | URL is on Google; page is indexed | Served over HTTPS | GSC already showed `Indexing requested`; no duplicate request sent |
| `https://proplogai.com/glossary/prop-firm-challenge` | URL is on Google; page is indexed | Served over HTTPS | No request; allow sitemap recrawl |
| `https://proplogai.com/glossary/overall-drawdown-limit` | URL is on Google; page is indexed | Served over HTTPS | No request; allow sitemap recrawl |
| `https://proplogai.com/glossary/trading-journal` | URL is on Google; page is indexed | Served over HTTPS | No request; allow sitemap recrawl |

## Sitemap evidence

- Root sitemap index: submitted 4 October 2026, last read 5 October 2026, status `Success`, 71 discovered pages.
- Glossary child sitemap: last read 3 October 2026, status `Success`, 36 discovered URLs.
- The production sitemap currently exposes 36 unique glossary URLs with a populated `lastmod` for every URL.
- No sitemap resubmission was made. The existing successful sitemap is the correct discovery route.

## Interpretation boundary

`URL is on Google` confirms the inspected URL is indexed at the time of inspection. It does not prove Google has recrawled the 8 October revision, retained every future update, or assigned rankings. An indexing request adds a URL to a priority crawl queue but does not guarantee timing or inclusion. Recheck crawl dates and search performance after sufficient processing time.
