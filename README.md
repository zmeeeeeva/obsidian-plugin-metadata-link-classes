# ✨ Obsidian Metadata Link Classes Plugin

Enhance your Obsidian links by automatically adding CSS classes based on frontmatter metadata! Style links dynamically using your custom CSS rules.

## ✨ Features

* Automatic class assignment: Links inherit classes derived from page frontmatter.
* Flexible metadata support: Handle boolean, string, and array metadata keys.
* Customizable styling: Target links with CSS like .link-publish-true or .link-tags-todo.
* Lightweight & performant: Minimal overhead, runs in real-time.

## ✨ How It Works

Given a note with frontmatter metadata:

```
draft: false
publish: true
danger: true
tags: ['todo', 'hit']
type: 'lorem-ipsum'
```

All internal links of this note will receive the following classes:

```
.link-publish-true
.link-danger-true
.link-tags-todo
.link-tags-hit
.link-type-lorem-ipsum
```

Simply target these in your CSS snippet to style links dynamically.
