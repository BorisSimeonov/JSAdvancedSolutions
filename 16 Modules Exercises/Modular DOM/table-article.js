let Article = require('./article');

class TableArticle extends Article {
    constructor(title, content, headings = null, data = null) {
        super(title, content);
        this.headings = headings;
        this.data = data;
    }

    loadData(headings, data) {
        this.headings = headings;
        this.data = data;
    }

    getElementString() {
        //building heading row
        let tableData = '<table class="data"><tr>';
        this.headings.forEach(h => tableData += `<th>${h}</th>`);
        tableData += `</tr>`;
        //formatting the keys to match data keys format and build the data rows
        this.data.forEach(dataObj => {
            tableData += '<tr>';
            this.headings.forEach(heading => {
                tableData += `<td>${dataObj[heading.replace(/\s+/, '').toLowerCase()]}</td>`
            });
            tableData += '</tr>';
        });
        tableData += '</table>';

        return `<div class="article"><div class="article-title">${this.title}</div>` +
            `<p>${this.content}</p><div class="table">${tableData}</div></div>`;
    }
}

module.exports = TableArticle;
