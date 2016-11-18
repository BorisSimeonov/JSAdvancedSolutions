class TitleBar {
    constructor(webpageTitle) {
        this.webTitle = TitleBar.escapeHtml(webpageTitle);
        this.links = [];
    }

    addLink(href, name) {
        let newLink = $('<a>')
            .attr('href', href)
            .text(TitleBar.escapeHtml(name))
            .addClass('menu-link');

        this.links.push(newLink);
    }

    appendTo(selector) {
        let title = $('<header class="header">');
        title.append(this.makeHeaderRow());
        title.append(this.makeDrawer());
        $(selector).append(title);
    }

    makeControlButton() {
        let controlButton = $('<a class="button">&#9776;</a>');
        controlButton.on('click', () => {$('.drawer').toggle()});
        return controlButton;
    }

    makeHeaderRow() {
        let headerRow = ($('<div class="header-row">'))
            .append(this.makeControlButton());
        headerRow.append(($('<span>'))
            .addClass('title')
            .text(this.webTitle));
        return headerRow;
    }

    makeDrawer() {
        let drawer = ($('<div class="drawer">'))
            .css('display', 'none');
        let nav = ($('<nav class="menu">'));
        for (let i = 0; i < this.links.length; ++i) {
            nav.append(this.links[i]);
        }
        drawer.append(nav);
        return drawer;
    }

    static escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}