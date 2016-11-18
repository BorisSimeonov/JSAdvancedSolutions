function generate(selector) {
    function generateSummary() {
        let result = ($('<div>'))
            .attr('id', 'summary')
            .append($('<h2>Summary</h2>'));

        let paragraph = ($('<p>'));
        $('#content strong').each((idx, st) => {
            paragraph.append($(st).text());
        });
        result.append(paragraph);
        $('#content').parent().append(result);
    }

    $(selector).on('click', generateSummary);
}