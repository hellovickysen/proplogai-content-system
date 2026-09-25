# Mobile table standard audit log

- Date: 2026-09-25
- Scope: All current and future PropLogAI blog tables; editorial guidance also applies to glossary tables
- Trigger: Mobile screenshots showed three-column comparison tables squeezed into narrow columns, causing sentences to render as tall stacks of words.
- Production effect: none

## Standard adopted

- Keep tables for comparisons that need row-and-column relationships.
- Preserve readable minimum column widths instead of compressing every column into the phone viewport.
- Allow normal sentence wrapping inside each readable column.
- Make the table itself horizontally scrollable with touch momentum and a visible scrollbar.
- Keep headings distinct, align cell content to the top, and retain row separators.
- Prevent the table from creating horizontal overflow on the full page.
- Verify table-level scrolling and page width at a 390 px mobile viewport.
- Use compact cards when they explain the same information more clearly than a wide table.

## System coverage

The rule is recorded in the visual standard, direct-trader teaching standard, reusable brief template, daily content prompt, blog quality and pre-publish checklists, and glossary quality and pre-publish checklists.

## Implementation coverage

The shared blog table CSS applies the correction to every existing article table, including the comparison table in `/blogs/overtrading-prop-firm-challenges` and both tables in `/blogs/trading-journal-template`. No article text or URL was changed.

## QA evidence

- At 390 px, the overtrading table kept a 144 px label column and two 208 px explanation columns.
- The overtrading table had a 346 px visible width and a 560 px scrollable width, confirming table-level horizontal scrolling.
- The expense guide table also had a 346 px visible width and a 560 px scrollable width.
- Both trading-journal tables exposed horizontal scrolling while keeping their two columns readable.
- The 390 px page viewport had no page-level horizontal overflow.
- The desktop overtrading table returned to its full 728 px width without unnecessary scrolling.
- Browser console review returned zero errors.
- Blog validation and static build passed for 25 articles and 26 generated pages.
- Full content-system validation and guard tests passed.

## Stopping point

The CSS and system rule remain local on `codex/batch-h3-expense-tracking` until the current local batch is approved for publication.
