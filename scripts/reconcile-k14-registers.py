"""Idempotently reconcile K14's locally revised article with portfolio registers."""

import csv
import io
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "content-map"
SOURCE_ID = "proplogai-live-blog-forex-journal-funded-accounts"
SOURCE_URL = "https://proplogai.com/blogs/forex-journal-funded-accounts"
SOURCE_KEYWORD = "trading journal for funded accounts"
TODAY = "2026-10-12"


def read_rows(path):
    data = path.read_text(encoding="utf-8-sig")
    newline = "\r\n" if "\r\n" in data else "\n"
    lines = data.splitlines(keepends=True)
    header = next(csv.reader([lines[0]]))
    return lines, header, newline


def encoded(row, newline):
    buffer = io.StringIO(newline="")
    csv.writer(buffer, quoting=csv.QUOTE_ALL, lineterminator=newline).writerow(row)
    return buffer.getvalue()


seo_path = ROOT / "seo-article-register.csv"
lines, header, newline = read_rows(seo_path)
for index in range(1, len(lines)):
    values = next(csv.reader([lines[index]]))
    if values[header.index("item_id")] != SOURCE_ID:
        continue
    row = dict(zip(header, values))
    row.update({
        "title": "Funded Account Trading Journal: What Extra Should You Record?",
        "keyword_evidence": "Editorial hypothesis",
        "keyword_checked_on": TODAY,
        "canonical_action": "Keep",
        "gsc_market": "",
        "gsc_top_query": "",
        "gsc_clicks_period": "",
        "gsc_impressions_period": "",
        "gsc_ctr_percent_period": "",
        "gsc_avg_position_period": "",
        "gsc_period": "",
        "last_content_review": TODAY,
        "notes": "K14 local revision 1 focuses on the exact funded-account rule-source card, planned versus actual result, and firm-confirmed status. Existing URL kept. Fresh India GSC and Semrush unavailable on 2026-10-12; historical global observations are in the K14 evidence note. Production remains unchanged.",
    })
    lines[index] = encoded([row[name] for name in header], newline)
    break
else:
    raise SystemExit(f"SEO row missing: {SOURCE_ID}")
seo_path.write_bytes("".join(lines).encode("utf-8"))

link_path = ROOT / "internal-link-register.csv"
lines, header, newline = read_rows(link_path)
existing = []
for index in range(1, len(lines)):
    values = next(csv.reader([lines[index]]))
    existing.append((index, dict(zip(header, values))))

targets = [
    ("https://proplogai.com/blogs/prop-firm-trading-journal", "prop-firm trading journal guide", "Basic plan-trade-review workflow", "cluster_to_pillar"),
    ("https://proplogai.com/blogs/prop-firm-rules-guide", "prop-firm rules guide", "How to read exact firm terms", "cluster_to_cluster"),
    ("https://proplogai.com/glossary/trading-journal", "trading journal", "First definition of the base record", "blog_to_glossary"),
    ("https://proplogai.com/glossary/daily-drawdown-limit", "daily drawdown limit", "Possible rule-day limit", "blog_to_glossary"),
    ("https://proplogai.com/glossary/overall-drawdown-limit", "overall drawdown limit", "Possible broader loss boundary", "blog_to_glossary"),
    ("https://proplogai.com/glossary/consistency-rule", "consistency rule", "Possible program-specific condition", "blog_to_glossary"),
    ("https://proplogai.com/glossary/trading-plan", "trading plan", "Own written setup check", "blog_to_glossary"),
    ("https://proplogai.com/glossary/trade-review", "trade review", "Review of decision versus outcome", "blog_to_glossary"),
    ("https://proplogai.com/blogs/weekly-trading-review-template", "weekly trading review template", "Broader multi-trade review", "cluster_to_cluster"),
    ("https://proplogai.com/blogs/trading-journal-fields", "trading journal fields guide", "Full optional field inventory", "cluster_to_cluster"),
    ("https://proplogai.com/trading-journal", "PropLogAI's free trading journal", "Manual journal option", "blog_to_product"),
]
browser_checked_now = {
    f"https://proplogai.com/glossary/{slug}"
    for slug in (
        "trading-journal", "daily-drawdown-limit", "overall-drawdown-limit",
        "consistency-rule", "trading-plan", "trade-review",
    )
}
browser_checked_now.add("https://proplogai.com/trading-journal")

seo_rows = list(csv.DictReader(seo_path.open(encoding="utf-8-sig", newline="")))
ids = {row["url"]: row["item_id"] for row in seo_rows}
keywords = {row["url"]: row["primary_keyword"] for row in seo_rows}
ids["https://proplogai.com/trading-journal"] = "proplogai-product-free-trading-journal"
keywords["https://proplogai.com/trading-journal"] = "free trading journal"
known_destinations = {}
for _, row in existing:
    if row["destination_http_status"] == "200" and row["target_url"] not in known_destinations:
        known_destinations[row["target_url"]] = row

for target_url, anchor, context, relationship in targets:
    if target_url not in ids:
        raise SystemExit(f"Target missing in SEO register: {target_url}")
    matches = [(i, row) for i, row in existing if row["source_item_id"] == SOURCE_ID and row["target_url"] == target_url]
    if len(matches) > 1:
        raise SystemExit(f"Duplicate K14 target: {target_url}")
    if matches:
        index, row = matches[0]
        row.update({
            "anchor_text": anchor,
            "link_context": context,
            "relationship": relationship,
            "status": "live_verified" if target_url.endswith("/prop-firm-trading-journal") else "verified_in_draft",
            "reason_or_follow_up": "K14 local MDX exact anchor to be checked in rendered article; destination HTTP status is from an earlier audit, not a new production crawl.",
        })
        if target_url in browser_checked_now:
            row.update({
                "destination_quality_status": "audited_live_page",
                "destination_http_status": "200",
                "last_verified": TODAY,
                "reason_or_follow_up": "K14 local exact anchor verified in rendered article; live destination opened with its expected H1 in the browser on 2026-10-12. Self-canonical not independently checked.",
            })
        lines[index] = encoded([row[name] for name in header], newline)
    else:
        prior = known_destinations.get(target_url)
        row = {name: "" for name in header}
        row.update({
            "source_item_id": SOURCE_ID,
            "source_url": SOURCE_URL,
            "source_primary_keyword": SOURCE_KEYWORD,
            "target_item_id": ids[target_url],
            "target_url": target_url,
            "target_primary_keyword": keywords[target_url],
            "anchor_text": anchor,
            "link_context": context,
            "relationship": relationship,
            "status": "verified_in_draft",
            "destination_quality_status": prior["destination_quality_status"] if prior else "needs_review",
            "destination_http_status": prior["destination_http_status"] if prior else "",
            "destination_canonical_url": prior["destination_canonical_url"] if prior else "",
            "last_verified": prior["last_verified"] if prior else TODAY,
            "reason_or_follow_up": "K14 local MDX exact anchor to be checked in rendered article; destination status is inherited from an earlier audit." if prior else "K14 local MDX exact anchor to be checked; destination not yet remotely verified.",
        })
        if target_url in browser_checked_now:
            row.update({
                "destination_quality_status": "audited_live_page",
                "destination_http_status": "200",
                "last_verified": TODAY,
                "reason_or_follow_up": "K14 local exact anchor verified in rendered article; live destination opened with its expected H1 in the browser on 2026-10-12. Self-canonical not independently checked.",
            })
        lines.append(encoded([row[name] for name in header], newline))

link_path.write_bytes("".join(lines).encode("utf-8"))
print("K14 SEO and internal-link register rows reconciled.")
