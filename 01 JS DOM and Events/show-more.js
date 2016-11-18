function showText() {
    return function () {
        let link = document.getElementById('more');
        let span = document.getElementById('text');
        link.style.display = 'none';
        span.style.display = 'inline';
    }
}
