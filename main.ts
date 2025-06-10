import { Plugin, MarkdownPostProcessorContext } from 'obsidian';

export default class LinkMetadataPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor(this.processLinks.bind(this));
  }

  async processLinks(el: HTMLElement, ctx: MarkdownPostProcessorContext) {
    // Find all rendered internal-link elements
    el.querySelectorAll<HTMLAnchorElement>('.internal-link').forEach(linkEl => {
      const linkPath = linkEl.getAttr('href')!;
      const file = this.app.metadataCache.getFirstLinkpathDest(linkPath, ctx.sourcePath);
      if (!file) return;

      const cache = this.app.metadataCache.getFileCache(file);
      const fm = cache?.frontmatter;

      if (!fm) return;

      Object
        .entries(fm)
        .forEach(([key, value]) => {
          if (typeof value === 'string') {
            linkEl.addClass(`link-${key}-${value}`);
          }

          if (typeof value === 'boolean' && value) {
            linkEl.addClass(`link-${key}-true`);
          }

          // Arrays
          if (Array.isArray(value)) {
            const tags = value.map(t => String(t).replace(/^#/, ''));

            tags.forEach(tag => {
              linkEl.addClass(`link-${key}-${tag}`);
            });
          }
        });
    });
  }
}
