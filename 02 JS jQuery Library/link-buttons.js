function attachEvents() {
    $('.button').click(changeClass);

    function changeClass() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}
