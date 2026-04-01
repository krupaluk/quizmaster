---
description: Guidelines for creating wiki entries for quiz questions
---

When creating wiki entries for quiz questions, follow these guidelines based on the Organon example:

## Structure

```javascript
"category_key": {
    "entry_key": {
        "title": "Short descriptive title",
        "content": `HTML content`
    }
}
```

## Content Guidelines

1. **Title**: Keep it concise (max 5-7 words), include the main subject

2. **Opening paragraph**: 
   - 1-2 sentences maximum
   - Brief definition + key fact
   - Remove Greek/Latin terms unless essential

3. **Main content - Choose appropriate format**:
   
   **Use TABLE when**: There's a structured list to compare (e.g., list of books with their descriptions, comparison of concepts)
   - 2-column layout for simple Subject | Description
   - Consider orientation: fewer criteria go to columns, more criteria go to rows (rows stretch better than columns)
   - Keep cell content short (3-5 words ideally)
   - Use alternating row colors for readability
   - Table styling: `width:100%; border-collapse: collapse; font-size: 14px;`
   
   **Use PARAGRAPHS when**: Describing a single concept, process, or narrative without structured items
   - Keep paragraphs short (2-4 sentences)
   - Use `<strong>` for key terms
   - Break into logical sections with brief headers if needed

4. **Closing paragraph**:
   - Single sentence with key significance
   - Use smaller font: `font-size: 14px; color: #555;`

## HTML Styling

- Use inline styles for compatibility
- Table header: `background: #fff8dc;` (light yellow)
- Borders: `border: 1px solid #ffd700;` for header, `#eee` for cells
- Alternating rows: `background: #fafafa;`
- Keep overall content compact for mobile viewing

## File Structure Pattern

Each wiki file must follow this pattern to avoid conflicts when multiple files are loaded:

```javascript
window.wiki = window.wiki || {};  // Initialize if not exists

window.wiki.categoryName = {      // Add your category
    "entry1": {
        "title": "Entry Title",
        "content": `...`
    },
    "entry2": { ... }
};  // Note: single closing brace with semicolon
```

**Important:**
- Always use `window.wiki = window.wiki || {};` first
- Then assign your category: `window.wiki.yourCategory = {...}`
- Never use `window.wiki = { "yourCategory": {...} }` as it overwrites other files

## Example Pattern

See `quizdata/wiki/wiki_logika.js` - "logika" > "organon" for the reference implementation.
