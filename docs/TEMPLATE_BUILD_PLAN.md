# Template Build Plan

## 1. Project Setup

- Ensure Tailwind CSS 4 and Lucide icons are installed and configured.
- Confirm MDX support for content pages and posts.

## 2. Data & Content Structure

- Define MDX frontmatter for each post type (Projects, Articles, Tools, Notebooks, Sermons, Jokes, Social, Static Pages) using the metadata in `POST_TYPES.md`.
- Organize content in folders by type (e.g., `/content/projects`, `/content/articles`, etc.).
- Create static pages (About, Contact, Terms, Privacy) with appropriate metadata.

## 3. Theme & Layout

- Implement the color palette and typography from the Theme section.
- Build a simple, professional, slightly fun UI using Tailwind classes.

## 4. Core Layout Components

- **Header**: Brand link, navigation links (Projects, Articles, Tools, Notebooks, Faith, Funny), search bar.
- **Footer**: Copyright, social links, static page links.

## 5. Page Templates

- **Home Page**: Hero section, featured/latest projects, articles, one tool, one notebook, three sermons, random joke.
- **All Posts Page**: Filters (sorting, categories, search), 24 cards per page, pagination.
- **Individual Post Page**: Title, description, metadata, type-specific content (image, links, tool/notebook/sermon/joke components).

## 6. Functionality

- Pagination (custom style: 1 2 ... 4 ... 6 7).
- Filtering and sorting for posts.
- Local search for posts.
- Random joke popup for “Funny” section.
- Social links and QR codes for social posts.

## 7. Components

- Card components for posts.
- Hero, featured, and latest sections.
- Tool and notebook renderers (for MDX/interactive content).
- Sermon and joke display components.
- Static page renderer.

## 8. Content Management

- Use MDX for all posts and static pages.
- Ensure metadata is validated and surfaced in UI.
- Support draft and featured flags for content visibility.

## 9. Final Steps

- Test all layouts and components for responsiveness and accessibility.
- Document how to add new content types and pages.
- Prepare for deployment (build, preview, optimize).
