function increment(elSelector) {
    let textArea = ($("<textarea>"))
        .addClass('counter')
        .val('0')
        .attr('disabled', 'true');
    let addButton = ($('<button>'))
        .addClass('btn')
        .attr('id', 'addBtn')
        .text('Add')
        .click(addLi);
    let incrementButton = ($('<button>'))
        .addClass('btn')
        .attr('id', 'incrementBtn')
        .text('Increment')
        .click(increment);
    let ul = ($('<ul>'))
        .addClass('results');

    ($(elSelector))
        .append($(textArea))
        .append(incrementButton)
        .append(addButton)
        .append(ul);

    function increment() {
        let val = Number($('textarea.counter').val());
        $('textarea.counter').val(++val);
    }

    function addLi() {
        let newLi = ($('<li>'))
            .text($('textarea.counter').val());
        ($('.results'))
            .append(newLi);
    }
}
