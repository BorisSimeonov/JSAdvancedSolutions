function search() {
    let counter = 0, text = "";
    let name = $('input#searchText').val();
    $('#towns li').each(function () {
        if ($(this).text().indexOf(name) >= 0 && name) {
            $(this).css('font-weight', 'bold');
            counter++;
        } else {
            $(this).css('font-weight', 'normal');
        }
        $('#result').text(`${counter} matches found.`);
    });
}
