# Content Production Playbook

## Objective

Manage the complete content production workflow for ProplogAI.

You are responsible for processing the content backlog from Airtable and producing publish-ready content using the repository standards.

---

# Source of Truth

Before starting:

1. Read README.md
2. Read all files in /knowledge
3. Read all files in /knowledge/editorial
4. Read the Gold Standard examples
5. Read the Blog Quality Checklist

These documents define the company's standards.

---

# Input

The production queue comes from Airtable.

Process every record where:

Status = Ready for Production

Sort by:

1. Priority (Highest first)
2. Last Updated
3. Created Date

---

# Determine Content Type

For each Airtable record determine:

- Rewrite Existing Blog
- New Blog
- Glossary Page
- Pillar Page
- Landing Page
- Comparison Article

---

# Workflow

## If Rewrite

Execute:

playbooks/rewrite-existing-blog.md

---

## If New Blog

Execute:

playbooks/write-new-blog.md

---

## After Content Is Generated

Always execute:

skills/qa/qa-reviewer.md

---

# QA Rule

If QA Score < 90

Return to the writing workflow.

Improve the article.

Run QA again.

Repeat until QA ≥ 90.

Never publish below 90.

---

# Required Output

For every completed record produce:

## Article

Publish-ready Markdown.

---

## SEO

- SEO Title
- Meta Description
- URL Slug

---

## Images

Recommend:

- Hero image
- In-article visuals
- Infographics
- Interactive components

---

## Internal Linking

Recommend:

- Existing articles to link
- New glossary links

---

## Publish Checklist

Confirm:

- Beginner Friendly
- SEO Optimized
- Grammar Checked
- Internal Links Added
- FAQ Added
- CTA Added
- QA Passed

---

# Airtable Update

When complete update the record:

Status → Completed

QA Score

Completion Date

Notes

---

# Continue

Move to the next record.

Repeat until there are no remaining records with:

Status = Ready for Production

---

# Stop Condition

Only stop when:

- Production queue is empty
- A required input is missing
- Human approval is explicitly required

Otherwise continue automatically.