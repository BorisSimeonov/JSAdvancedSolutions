(function createBook() {
    let count = 0;
    return function (selector, title, author, isbn) {
        count++;
        let bookTitle = ($('<p>'))
            .addClass("title")
            .text(title);
        let bookAuthor = ($('<p>'))
            .addClass("author")
            .text(author);
        let bookIsbn = ($('<p>'))
            .addClass("isbn")
            .text(isbn);
        let selectBtn = ($('<button>Select</button>'))
            .on('click', function () {
                $(this).parent().css('border', '2px solid blue');
            });
        let deselectBtn = ($('<button>Deselect</button>'))
            .on('click', function () {
                $(this).parent().css('border', 'none');
            });
        let div = $('<div>')
            .append(bookTitle)
            .append(bookAuthor)
            .append(bookIsbn)
            .append(selectBtn)
            .append(deselectBtn)
            .attr('id', ('book' + count))
            .css('border', 'none');
        $(selector).append(div);
    }
}());
