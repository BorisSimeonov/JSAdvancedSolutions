function deleteByEmail() {
    return function () {
        let tableRows = document.querySelectorAll('#customers tr td:nth-child(2)');
        let eMail = document.getElementsByName('email')[0].value;
        let tr;
        for (let td of tableRows) {
            if (td.innerHTML === eMail) {
                tr = td.parentNode;
                tr.parentNode.removeChild(tr);
                document.getElementById('result').textContent = "Deleted."
                return;
            }
        }
        document.getElementById('result').textContent = "Not found."
    }
}
