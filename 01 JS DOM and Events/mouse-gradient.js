function attachGradientEvents() {
    return function() {
        let gradient = document.getElementById('gradient');
        gradient.addEventListener('mousemove', gradientMove);
        gradient.addEventListener('mouseout', gradientOut);
        let resultDiv = document.getElementById('result');

        function gradientMove(e) {
            let positionProc = e.offsetX / (e.target.clientWidth - 1);
            positionProc = Math.trunc(positionProc * 100);
            resultDiv.textContent = positionProc + '%';
        }

        function gradientOut() {
            resultDiv.textContent = "";
        }
    }
}