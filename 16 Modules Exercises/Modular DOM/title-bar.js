let BaseElement = require('./base-element');

class TitleBar extends BaseElement {
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        this.links.push(
            `<a class="menu-link" href="${href}">${name}</a>`
        );
    }

    getElementString() {
        return `<header class="header">` +
            `<div><span class="title">${this.title}</span></div>` +
            `<div><nav class="menu">${this.links.join('|')}</nav></div></header>`;
    }
}

module.exports = TitleBar;