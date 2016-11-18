function tableBuilder(selector) {
    let jTarget = $(selector);
    let table = $('<table>');

    function createTable(columnNames) {
        let header = $(`<tr>`);
        for (let thName of columnNames) {
            header.append($('<th>').text(thName));
        }

        header.append($('<th>').text('Action'));
        table.append(header);
        jTarget.empty();
        jTarget.append(table);
    }

    function fillData(dataRows) {
        for (let dataRow of dataRows) {
            let row = $(`<tr>`);
            for (let tdText of dataRow) {
                row.append($('<td>').text(tdText));
            }
            row.append($(`<td>`)
                .append($('<button>')
                    .text('Delete')
                    .click(function (e) {
                        $(e.target).parent().parent().remove()
                    })));
            table.append($(row));
        }
    }

    return {
        createTable,
        fillData
    }
}
