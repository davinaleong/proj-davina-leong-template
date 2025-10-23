# Post Types

## Common MDX Metadata Fields

All post types should include these essential metadata fields in their frontmatter:

### Required Fields

- **title**: The main heading of the post
- **description**: Brief summary for SEO and social media previews
- **date**: Publication date (YYYY-MM-DD format)
- **slug**: URL-friendly version of the title
- **author**: Post author name
- **tags**: Array of keywords for categorization
- **categories**: Array of broad content groupings
- **draft**: Boolean indicating if post is ready for publication

### Optional Fields

- **lastmod**: Last modified date (YYYY-MM-DD format)
- **preview**: Path to preview/thumbnail image
- **readingTime**: Estimated reading time in minutes
- **featured**: Boolean to mark as featured content
- **excerpt**: Custom excerpt (if different from description)

---

## Post Type Specifications

### 1. Projects

- **title**: Project name
- **description**: Project overview and purpose
- **preview**: Project thumbnail/screenshot
- **categories**: ["Projects", "Web Development", etc.]
- **tags**: Technology stack, project type
- **date**: Project completion/launch date
- **slug**: URL-friendly project name
- **author**: Project creator
- **draft**: Publication status
- **featured**: Highlight important projects
- **demoLink**: Live demo URL
- **repoLink**: Source code repository URL
- **lastmod**: Last update date
- **readingTime**: Estimated time to read project details
- **MDX Content**: Detailed project documentation

### 2. Articles

- **title**: Article headline
- **description**: Article summary
- **preview**: Article thumbnail/hero image
- **categories**: ["Articles", "Tutorials", "Opinions", etc.]
- **tags**: Topics, technologies, concepts covered
- **date**: Publication date
- **slug**: URL-friendly article title
- **author**: Article author
- **draft**: Publication status
- **featured**: Highlight important articles
- **lastmod**: Last update date
- **readingTime**: Estimated reading time
- **excerpt**: Custom excerpt for listings
- **MDX Content**: Full article content

### 3. Tools

- **title**: Tool name
- **description**: Tool functionality and purpose
- **categories**: ["Tools", "Utilities", "Resources", etc.]
- **tags**: Tool type, use cases, technologies
- **date**: Creation/release date
- **slug**: URL-friendly tool name
- **author**: Tool creator
- **draft**: Publication status
- **featured**: Highlight useful tools
- **lastmod**: Last update date
- **readingTime**: Estimated time to understand tool
- **MDX Content**: Tool documentation and usage

### 4. Notebooks

- **title**: Notebook title
- **description**: Notebook purpose and content overview
- **preview**: Notebook thumbnail or first chart
- **categories**: ["Notebooks", "Data Science", "Analysis", etc.]
- **tags**: Topics, datasets, methodologies
- **date**: Creation date
- **slug**: URL-friendly notebook title
- **author**: Notebook creator
- **draft**: Publication status
- **featured**: Highlight important analyses
- **lastmod**: Last update date
- **readingTime**: Estimated time to review notebook
- **notebookPath**: Path to original .ipynb file
- **notebookUrl**: Link to interactive notebook (if hosted)
- **MDX Content**: Converted notebook content with explanations

### 5. Sermons (Faith)

- **title**: Sermon title
- **description**: Sermon summary and key themes
- **categories**: ["Faith", "Sermons", "Spirituality", etc.]
- **tags**: Biblical topics, themes, scripture references
- **date**: Sermon date
- **slug**: URL-friendly sermon title
- **author**: Preacher/pastor name
- **draft**: Publication status
- **featured**: Highlight important messages
- **lastmod**: Last update date
- **readingTime**: Estimated listening/reading time
- **MDX Content**: Sermon transcript and notes

### 6. Jokes

- **title**: Joke title or setup
- **description**: Brief joke description
- **categories**: ["Humor", "Jokes", "Entertainment", etc.]
- **tags**: Joke type, topics, humor style
- **date**: Creation/publication date
- **slug**: URL-friendly joke title
- **author**: Joke creator
- **draft**: Publication status
- **featured**: Highlight popular jokes
- **lastmod**: Last update date
- **readingTime**: Estimated time to read joke
- **jokeType**: Type of joke (pun, story, one-liner, etc.)
- **rating**: Humor rating (1-5 stars)
- **MDX Content**: Full joke content

### 7. Social

- **title**: Social post title
- **description**: Brief description (optional)
- **categories**: ["Social", "Links", "External", etc.]
- **tags**: Platform, content type
- **date**: Post date
- **slug**: URL-friendly post title
- **author**: Post creator
- **draft**: Publication status
- **featured**: Highlight important social posts
- **lastmod**: Last update date
- **url**: External URL
- **platform**: Social media platform name
- **qrCode**: QR code image path
- **preview**: Social media preview image
- **MDX Content**: Additional context or commentary

### 8. Static Pages

- **title**: Page title
- **description**: Page summary or purpose
- **slug**: URL-friendly page name (e.g., "about", "contact")
- **author**: Page creator or maintainer
- **draft**: Publication status
- **lastmod**: Last update date
- **featured**: Highlight important pages (optional)
- **preview**: Thumbnail or hero image (optional)
- **MDX Content**: Full page content
