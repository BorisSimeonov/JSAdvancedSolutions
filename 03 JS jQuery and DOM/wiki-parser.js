function wikiParser() {
    let parameters = $('#wiki').text().split(/\n/g);
    let result = [];
    for (let line of parameters) {
        line = line.replace(/===([^='\[]+?)===/g,
            (full, matchGroup) => `<h3>${matchGroup}</h3>`)
            .replace(/==([^='\[]+?)==/g, (full, matchGroup) => `<h2>${matchGroup}</h2>`)
            .replace(/=([^='\[]+?)=/g, (full, matchGroup) => `<h1>${matchGroup}</h1>`)
            .replace(/'''([^'=\[]+?)'''/g, (full, matchGroup) => `<b>${matchGroup}</b>`)
            .replace(/''([^'=\[]+?)''/g, (full, matchGroup) => `<i>${matchGroup}</i>`)
            .replace(/\[\[([^'=\[\]]+?)\|([^'=\[\]]+?)]]/g,
                (full, matchGroup1, matchGroup2) =>
                    `<a href="/wiki/${matchGroup1}">${matchGroup2}</a>`
            )
            .replace(/\[\[([^'=\[\]]+?)]]/g, (full, matchGroup) =>
                `<a href="/wiki/${matchGroup}">${matchGroup}</a>`
            );
        result.push(line);
    }


    $('#wiki').text("");
    for (let line of result) {
        $('#wiki').append(line);
    }
}
