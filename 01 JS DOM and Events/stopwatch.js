function stopwatch() {
    return function () {
        let startBtn = document.getElementById('startBtn');
        let stopBtn = document.getElementById('stopBtn');
        let time, intervalID;
        startBtn.addEventListener('click', function () {
            document.getElementById('time').textContent = "00:00";
            time = 0;
            intervalID = setInterval(incrementTime, 1000);
            startBtn.disabled = true;
            stopBtn.disabled = false;
        });
        stopBtn.addEventListener('click', function () {
            clearInterval(intervalID);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        });

        function incrementTime() {
            time++;
            let minutes = Math.trunc(time / 60);
            let seconds = time % 60;
            let timeString = "";
            if (minutes < 10) {
                timeString += "0"
            }
            timeString += minutes + `:`;
            if (seconds < 10) {
                timeString += "0";
            }
            timeString += seconds;

            document.getElementById('time').textContent = timeString;
        }
    }
}
