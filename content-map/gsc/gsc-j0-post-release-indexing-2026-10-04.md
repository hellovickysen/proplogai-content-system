# GSC J0 Post-Release Indexing Check — 4 October 2026

## Property checked

- Google Search Console URL-prefix property: `https://proplogai.com/`
- Check method: direct authenticated Search Console browser session
- This is a point-in-time indexing check. It does not prove ranking or future index retention.

## Submitted sitemap state before cleanup

| Sitemap | Status | Last read | Discovered pages |
|---|---|---:|---:|
| `/blogs/sitemap.xml` | Success | 2 October 2026 | 26 |
| `/glossary/sitemap.xml` | Success | 3 October 2026 | 36 |

The blog and glossary sitemaps were already accepted, but their last-read dates predated the J0 release. The live root sitemap index was checked before changing Search Console. It contains `/sitemap-static.xml`, `/blogs/sitemap.xml` and `/glossary/sitemap.xml`, so the three direct child submissions were redundant.

## URL inspection results before indexing requests

| URL | GSC result | J0 action |
|---|---|---|
| `https://proplogai.com/blogs/how-emotions-affect-trading-decisions` | Not on Google; URL unknown to Google | Request indexing prepared |
| `https://proplogai.com/blogs/prop-firm-rules-guide` | Not on Google; URL unknown to Google | Request indexing prepared |
| `https://proplogai.com/blogs/prop-firm-payout-rules` | Not on Google; URL unknown to Google | Request indexing prepared |
| `https://proplogai.com/blogs/trading-performance-metrics` | Not on Google; URL unknown to Google | Request indexing prepared |
| `https://proplogai.com/blogs/trading-expectancy-calculator` | Not on Google; URL unknown to Google | Request indexing prepared |
| `https://proplogai.com/blogs/trading-discipline-checklist` | Not on Google; URL unknown to Google | Request indexing prepared |
| `https://proplogai.com/glossary/drawdown` | URL is on Google; page is indexed | No request needed |
| `https://proplogai.com/glossary/revenge-trading` | URL is on Google; page is indexed | No request needed |
| `https://proplogai.com/glossary/consistency-rule` | URL is on Google; page is indexed | No request needed |
| `https://proplogai.com/glossary/daily-drawdown-limit` | URL is on Google; page is indexed | No request needed |

## Submission state

- Completed on 5 October 2026 local time. Search Console displays the sitemap submission date as 4 October 2026.
- Removed the redundant direct Search Console submissions for `/sitemap-static.xml`, `/blogs/sitemap.xml` and `/glossary/sitemap.xml`. Their live files and URLs were not deleted.
- Kept and refreshed only `/sitemap.xml`, the root sitemap index that includes all three child sitemaps.
- `/sitemap.xml` submission result: Success; 71 discovered pages at the time of submission.
- All six new blog URLs were accepted into Google's priority crawl queue with the `Indexing requested` result.
- Four glossary indexing requests: intentionally skipped because GSC already reports the pages indexed.

## Interpretation

The six new blog routes are live and crawlable in the production audit, but Google had not discovered them at the time of the initial check. The four materially updated glossary routes were already indexed. Search Console accepted the six blog requests, but this does not guarantee indexing, timing, impressions, clicks or ranking. The sitemap's `last read` value can update later because submission and processing are separate events.
