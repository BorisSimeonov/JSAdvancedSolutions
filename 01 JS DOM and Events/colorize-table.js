function colorize() {
    return function () {
        let table = document.querySelectorAll('table tr');
        console.dir(table);
        for (let i = 0; i < table.length; ++i) {
            if (i % 2 !== 0) {
                table[i].style.background = "Teal";
            }
        }
    }
}
