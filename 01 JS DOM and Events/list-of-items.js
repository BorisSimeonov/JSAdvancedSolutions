function addItem() {
    return function () {
        let text = document.getElementById('newItemText').value;
        let ul = document.getElementById('items');
        let entry = document.createElement('li');
        entry.textContent = text;
        ul.appendChild(entry);
    }
}
