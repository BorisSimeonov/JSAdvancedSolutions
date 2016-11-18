function attachEvents() {
    $('#items li').on('click', changeSelectState);
    $('#showTownsButton').on('click', showTowns);

    function changeSelectState() {
        console.log($(this).attr('selected'));
        let li = $(this);
        if (li.attr('data-selected')) {
            ($(this))
                .removeAttr('data-selected')
                .css('background', '');
        } else {
            ($(this))
                .attr('data-selected', 'true')
                .css('background', '#DDD');
        }
    }

    function showTowns() {
        let townString = $('#items li[data-selected]').toArray().map(li => $(li).text()).join(', ');
        if (townString) {
            $('#selectedTowns').text("Selected towns: " + townString);
        } else {
            $('#selectedTowns').text("");
        }

    }
}
