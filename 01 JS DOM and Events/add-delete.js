function addItem() {
    return function () {
        let text = document.getElementById('newText').value;
        let ul = document.getElementById('items');
        let li = document.createElement('li');
        li.textContent = text;
        let span = document.createElement('span');
        span.innerHTML = "<a href='#'>[Delete]</a>";
        span.addEventListener("click", function () {
            let li = this.parentNode;
            li.parentNode.removeChild(li);
        });
        li.appendChild(span);
        ul.appendChild(li);
    }
}
