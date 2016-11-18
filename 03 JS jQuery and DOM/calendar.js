function calendar([day, month, year]) {
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let inputDate = new Date(year, month - 1, day);
    let selector = $('#content');
    let calendarDays = [];
    let firstDayInMonthIdx = new Date(year, month - 1, 1).getDay();
    if (firstDayInMonthIdx !== 1) {
        if (firstDayInMonthIdx === 0) {
            for (let i = 0; i < 6; ++i) {
                calendarDays.push("");
            }
        } else {
            for (let i = 1; i < firstDayInMonthIdx; ++i) {
                calendarDays.push("");
            }
        }
    }
    let lastDayCurrent = new Date(Number(year), Number(month)).getUTCDate();
    for (let day = 1; day <= lastDayCurrent; ++day) {
        calendarDays.push(day);
    }

    let htmlResult = $('<table>');
    let caption = $('<caption>');
    caption.text(`${months[inputDate.getMonth()]} ${inputDate.getFullYear()}`);
    htmlResult.append(caption);
    selector.append(htmlResult);
    htmlResult.append(createHeader(days));
    let position = 0;

    do {
        let tr = $('<tr>');
        for (let dIdx = 0; dIdx < 7; ++dIdx) {
            let td = $('<td>');
            if (calendarDays[position] === day) {
                td.addClass('today')
            }
            td.text(calendarDays[position]);
            ++position;
            tr.append(td);
        }
        htmlResult.append(tr);
    } while (position < calendarDays.length);


    function createHeader(days) {

        let result = $('<tr>');
        for (let item of days) {
            result.append(
                ($('<th>'))
                    .text(item)
            );
        }
        return result;
    }
}
