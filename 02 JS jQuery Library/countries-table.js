function initializeTable() {
    appendCountryToTable("Bulgaria", "Sofia");
    appendCountryToTable("Germany", "Berlin");
    appendCountryToTable("Russia", "Moscow");


    $('#createLink').click(function () {
        let coutry = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        appendCountryToTable(coutry, capital);
    });

    function appendCountryToTable(countryName, countryCapital) {
        let tr = ($("<tr>"))
            .append($("<td>").text(countryName))
            .append($("<td>").text(countryCapital));
        let deleteLink =
            ($("<a href='#'>"))
                .text("[Delete]")
                .click(deleteRow);
        let upLink = ($("<a href='#'>"))
            .text("[Up]")
            .click(moveRowUp);
        let downLink =
            ($("<a href='#'>"))
                .text("[Down]")
                .click(moveRowDown);

        let actionTD = ($("<td>"))
            .append(upLink)
            .append(downLink)
            .append(deleteLink);

        tr.append(actionTD);
        $("#countriesTable").append(tr);
        fixRowActions();
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            $(this).remove();
            fixRowActions();
        });
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            $(row).prev().before(row);
            row.fadeIn();
            fixRowActions();
        });
    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            $(row).next().after(row);
            row.fadeIn();
            fixRowActions();
        });
    }

    function fixRowActions() {
        let rows = $('#countriesTable tr').toArray().slice(2);
        for (let i = 0; i < rows.length; ++i) {
            $(rows[i]).find("td a").css('display', 'inline');
            if (i === 0) {
                $(rows[i]).find("td a:contains('Up')").css('display', 'none');
            } else if (i === rows.length - 1) {
                $(rows[i]).find("td a:contains('Down')").css('display', 'none');
            }
        }
    }
}
