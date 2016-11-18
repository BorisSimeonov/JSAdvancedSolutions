function extractText() {
    return function () {
        let ul = document.getElementsByTagName('li');
        let textArea = document.getElementById('result');
        let result = [];
        for (let i = 0; i < ul.length; ++i) {
            result.push(ul[i].innerHTML);
        }
        textArea.value = result.join('\n');
    }
}
