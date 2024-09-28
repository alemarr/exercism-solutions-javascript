class MarkdownDocument {
  constructor(markdown) {
    this.markdown = markdown;
  }

  getLines() {
    return this.markdown.split("\n");
  }

  toHtml() {
    let html = '';
    const lines = this.getLines();

    let idx = 0;
    while (idx < lines.length) {
      const currentLine = lines[idx];
      const markdownLine = new MarkdownLine(currentLine);
      const markdownElement = MarkdownElementFactory.create(markdownLine);

      if (markdownLine.isListItem()) {
        const list = new List();
        while (lines[idx] && (new MarkdownLine(lines[idx]).isListItem())) {
          list.add(new ListItem(new MarkdownLine(lines[idx])));
          delete lines[idx];
          idx++;
        }

        if (list.count()) {
          html += list.toHtml();
        }
        continue;
      }

      html += markdownElement.toHtml();
      idx++;
    }

    return html;
  }
}

class MarkdownElementFactory {
  static create(markdownLine) {
    if (markdownLine.isHeading()) {
      return new Heading(markdownLine);
    }

    return new Paragraph(markdownLine);
  }
}

const MARKDOWN_REGEX = {
  italic: /(.*)_(.*)_(.*)/,
  bold: /(.*)__(.*)__(.*)/,
  heading: /^[#]{1,6}\s/,
  headingCount: /#/g,
  listItem: /^\*(.*)/,
}

class MarkdownLine {
  constructor(markdownLine) {
    this.markdownLine = markdownLine;
  }

  isHeading() {
    return MARKDOWN_REGEX.heading.test(this.markdownLine);
  }

  isItalic() {
    return MARKDOWN_REGEX.italic.test(this.markdownLine);
  }

  isBold() {
    return MARKDOWN_REGEX.bold.test(this.markdownLine);
  }

  isListItem() {
    return MARKDOWN_REGEX.listItem.test(this.markdownLine);
  }

  getString() {
    return this.markdownLine;
  }
}

class MarkdownElement {
  constructor(markdownLineInstance) {
    this.markdownLine = markdownLineInstance;
  }

  getLine() {
    return this.markdownLine;
  }
}

class Heading extends MarkdownElement {
  toHtml() {
    const size = this.getLine().getString().substr(0, 6).match(/#/g).length;
    const content = this.getLine().getString().replace(MARKDOWN_REGEX.heading, '').trim();
    return `<h${size}>${content}</h${size}>`;
  }
}

class Paragraph extends MarkdownElement {
  toHtml() {
    let paragraph = '<p>%s</p>';
    let line = this.getLine();

    if (line.isBold()) {
      const bold = new Bold(line);
      line = new MarkdownLine(bold.toHtml());
    }

    if (line.isItalic()) {
      const italic = new Italic(line);
       line = new MarkdownLine(italic.toHtml());
    }

    return paragraph.replace('%s', line.getString());
  }
}

class List {
  constructor() {
    this.items = [];
  }

  add(listItem) {
    this.items.push(listItem);
  }

  count() {
    return this.items.length;
  }

  toHtml() {
    const list = '<ul>%s</ul>';
    const items = [];
    this.items.forEach(item => {
      items.push(item.toHtml());
    });
    return list.replace('%s', items.join(''));
  }
}

class ListItem extends MarkdownElement {
  toHtml() {
    const listItem = `<li>%s</li>`;
    const content = this.getLine().getString().split(MARKDOWN_REGEX.listItem);
    let line = new MarkdownLine(content[1].trim());

    if (!line.isBold() && !line.isItalic()) {
      return listItem.replace("%s", line.getString());
    }

    if (line.isBold()) {
      line = new MarkdownLine(
          (new Bold(line)).toHtml()
    );
    }

    if (line.isItalic()) {
      line = new MarkdownLine(
          (new Italic(line)).toHtml()
    );
    }

    return listItem.replace("%s", line.getString());
  }
}

class Italic extends MarkdownElement {
  toHtml() {
    const matches = MARKDOWN_REGEX.italic.exec(this.getLine().getString());
    return matches[1] + `<em>${ matches[2] }</em>` + matches[3];
  }
}

class Bold extends MarkdownElement {
  toHtml() {
    const matches = MARKDOWN_REGEX.bold.exec(this.getLine().getString());
    return matches[1] + `<strong>${ matches[2] }</strong>` + matches[3];
  }
}

export function parse(markdown) {
  const document = new MarkdownDocument(markdown);
  return document.toHtml();
}
