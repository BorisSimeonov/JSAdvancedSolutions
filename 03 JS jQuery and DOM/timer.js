function timer() {
    let timer = undefined;
    let time = 0;
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);

    function startTimer() {
        if (!timer) {
            timer = setInterval(step, 1000);
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = undefined;
        }
    }

    function step() {
        time += 1;
        updateTimer();
    }

    function updateTimer() {
        let seconds = leadZero(time % 60);
        let minutes = leadZero(Math.trunc(time / 60) % 60);
        let hours = leadZero(Math.trunc(time / 3600));

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }

    function leadZero(number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    }
}
