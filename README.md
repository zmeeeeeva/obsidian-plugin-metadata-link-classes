# ✨ Metadata Link Classes Plugin

Enhance your Obsidian links by automatically adding classes based on frontmatter metadata! Style links dynamically using your custom CSS rules.

## ✨ Features

* Automatic class assignment from page frontmatter metadata.
* Handles boolean, string, and array metadata keys.
* Target links with CSS like .link-publish-true or .link-tags-todo.

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

Simply target these in your custom CSS snippets.
