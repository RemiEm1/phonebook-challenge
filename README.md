# Phonebook Challenge
This repository contains a single-page React app scaffolded with Vite. Your task is to build it into a small phonebook/directory: start with a static contact list, then make it dynamic by fetching JSON, adding search, and basic interactivity.

## Getting Started

1. Fork this repository to your account.

1. Clone _your_ fork to your machine.

1. Install dependencies:
    ```bash
    npm install
    ```
1. Run the dev server:
    ```bash
    npm run dev
    ```
1. Open the app in your browser at the URL printed in the terminal.

## Project Structure

- `src/App.jsx`: Main page markup and interactive logic with TASK/TODO comments.
- `src/App.css`: Page layout and components. You will write responsive CSS.
- `src/index.css`: Global tokens, color scheme, resets.
- `public/data/contacts.json`: Data to fetch and render.
- `index.html`: Document metadata.

## What You'll Build

A single page that:

- Starts with a static, hardcoded list of contacts (name, phone, email, photo).
- Later fetches and displays contacts from JSON.
- Supports search by name or phone.
- Allows adding a contact with basic validation.
- Has accessible labels and headings.

## Tasks

Complete these tasks in order. Save most JavaScript for Sections 3 & 4.

### **Section 1**: HTML Essentials

- Choose your theme (examples below) and add HTML elements like titles and headers where appropriate.
- Add meaningful, hierarchical headings (`h1` for the page title, `h2` for sections, `h3` for card titles).
- Add helpful placeholder text where appropriate.
- Add descriptive `alt` text to any images/icons.
- Use semantic elements where possible: `main`, `header`, `section`, `footer`, `ul`, `li`, `form`.
- Add 10 hardcoded contacts in the JSX (name, phone, email, photo). You may loop an array of contacts or hardcode the whole list.

### **Section 2**: Thematic & Basic Styling

- Choose a theme for your directory and implement it using CSS (colors, fonts, imagery).
- Ensure comfortable spacing with margins/padding, and make text readable.
- Provide focus styles for interactive elements (`button`, `input`, `select`).
- Use imagery that fits your theme.

### **Section 3**: Pagination & Light Interactivity

- Implement pagination for the contact directory.
- Display one contact per page.
- Add navigation buttons (e.g., Previous, Next) to move between pages.
- Update the view to display the contact based on the current page.

### **Section 4**: Data

- Fetch contacts from `/data/contacts.json` in `useEffect`.
    - Implement `loading` and `error` states; if fetch fails, fall back to a local hardcoded list.
- Search (case-insensitive) by name OR phone; update the visible list accordingly.
- Add Contact form with validation:
    - Name required (min 2 chars), phone required, and email must include `@`.
    - On submit, add the new contact to the _top_ of the list. Clear the form.
    - Show inline validation messages.

### **Bonus**:

- Highlight the portion of name/phone that matches the search query.
- Persist contacts to `localStorage`; restore on load while keeping the fetch fallback behavior.
- Implement responsive layout.

## You May:

- Create additional files and components.
- Alter the contact list and layout to fit the theme you choose (e.g. space, anime, games).
- Consult online documentation for assistance with syntax.
- Use genAI _within reason_ to assist with complex code (I think Copilot is ok, but be sure to guide it properly and not blindly trust it).
- Ping me with questions and set up office hours. I can guide you as you code.

## You May Not:

- Throw the whole thing into ChatGPT.
- Cry.

## Expectations & Rubric

I will check for:

- Correctness of features.
- Clean, readable code and meaningful naming.
- Clean, semantic HTML.
- Cohesive theme and basic styling.
- Graceful error handling and edge case coverage.
- Proper use of React Hooks.

## Tips

- Start simple; get each task passing before moving on.
- Use loops!
- Research, research, research when you're stuck.
- Keep components small and functions descriptive.
- Test, test, test.
- Commit your code often.
- Research the `useState` and `useEffect` hooks.

## Submitting

You should create a branch for _each_ section. That is, create a Section 1 branch from `main` before you begin, then branch into a Section 2 branch, etc. We'll learn how to merge these back to `main` as we go.

For each section, there is an assignment on Brightspace. Provide:

- Your final code repository link _directly to the branch for the specific section's work_.
- A short note (1–2 paragraphs) describing what you implemented and any trade-offs.


## Grading Rubrics

### Section 1: HTML Essentials

| **Criterion**                                  | **Exemplary**                                                          | **Proficient**                     | **Developing**                                   | **Points** |
| ---------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------ | ---------- |
| **Semantic Structure & Headings (32 pts)**     | Uses semantic elements; logical H1/H2/H3 hierarchy.                    | Minor hierarchy/semantic issues.   | Flat/incorrect headings; non-semantic structure. | /32        |
| **Accessible Text & Images (20 pts)**          | Descriptive alt text; clear labels and placeholders where appropriate. | Some alt/label gaps.               | Largely missing alt/labels.                      | /20        |
| **Static Contact List (10 contacts) (28 pts)** | Cleanly rendered list via array/loop; consistent fields.               | Present but minor inconsistencies. | Fewer than 10 or messy/duplicated markup.        | /28        |
| **Clarity & Organization (20 pts)**            | Readable structure and comments as needed.                             | Mostly clear.                      | Hard to follow.                                  | /20        |


### Section 2: Thematic & Basic Styling

| **Criterion**                      | **Exemplary**                                                 | **Proficient**                    | **Developing**                       | **Points** |
| ---------------------------------- | ------------------------------------------------------------- | --------------------------------- | ------------------------------------ | ---------- |
| **Theme Cohesion (32 pts)**        | Colors/typography/imagery fit a coherent theme.               | Mostly cohesive.                  | Inconsistent or clashing theme.      | /32        |
| **Readability & Spacing (24 pts)** | Comfortable line length, spacing, hierarchy.                  | Minor spacing/readability issues. | Cramped or inconsistent spacing.     | /24        |
| **Focus & States (24 pts)**        | Clear focus styles and affordances for inputs/buttons.        | Some states missing/inconsistent. | No visible focus; poor affordances.  | /24        |
| **CSS Organization (20 pts)**      | Logical structure; avoids dead rules; responsive tokens used. | Some organization issues.         | Disorganized; repeated/unused rules. | /20        |


### Section 3: Pagination & Light Interactivity

| **Criterion**                        | **Exemplary**                                                               | **Proficient**                                 | **Developing**                             | **Points** |
| ------------------------------------ | --------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------ | ---------- |
| **Pagination (1 per page) (40 pts)** | Exactly one contact per page with correct index handling.                   | Works but with minor off-by-one/edge issues.   | Incomplete or unreliable.                  | /40        |
| **Navigation Controls (28 pts)**     | Prev/Next (and optional jump) work and disable at edges; accessible labels. | Mostly works; minor edge/accessibility issues. | Glitchy controls; missing disabled states. | /28        |
| **State & Rendering Logic (32 pts)** | Simple, readable state; no unnecessary re-renders.                          | Some duplication/inefficiency.                 | Confusing or buggy state flow.             | /32        |


### Section 4: Data, Search, & Add Contact

| **Criterion**                                      | **Exemplary**                                                                               | **Proficient**                                   | **Developing**                         | **Points** |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------- | ---------- |
| **Fetching & Fallback (28 pts)**                   | `useEffect` fetch with loading/error; clean fallback to local list; resilient to failure.   | Works but minor race/cleanup issues.             | Unreliable or no fallback.             | /28        |
| **Search (name/phone, case-insensitive) (24 pts)** | Fast, correct filtering; debounced or efficient; optional highlight bonus.                  | Works but some edge cases (spacing, formatting). | Incomplete or incorrect filter logic.  | /24        |
| **Add Contact + Validation (32 pts)**              | Validates (name≥2, phone req, email has `@`); inline messages; inserts at top; clears form. | Mostly validates; minor messaging/clear issues.  | Weak validation; adds invalid entries. | /32        |
| **State Integrity & UX (16 pts)**                  | No duplicates on add, consistent sorting, clear feedback.                                   | Minor UX inconsistencies.                        | Confusing or error-prone.              | /16        |


Extra credit may be given. Some ideas to consider are: match highlighting polish, `localStorage` persistence done cleanly, thoughtful responsive layout, or exceptionally clear code comments.