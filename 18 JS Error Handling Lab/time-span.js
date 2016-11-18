class TimeSpan {
    constructor(hours, minutes, seconds) {
        this.initializeTimeSpan(hours, minutes, seconds)
    }

    initializeTimeSpan(hours, minutes, seconds) {
        if (typeof hours !== 'number' || !Number.isInteger(hours))
            throw new RangeError(`Invalid hours: ${hours}`);
        if (typeof minutes !== 'number' || !Number.isInteger(minutes))
            throw new RangeError(`Invalid minutes: ${minutes}`);
        if (typeof seconds !== 'number' || !Number.isInteger(seconds))
            throw new RangeError(`Invalid seconds: ${seconds}`);

        let addToMinutes = this.setSeconds(seconds);
        let addToHours = this.setMinutes(minutes + addToMinutes);
        this.setHours(hours + addToHours);
    }

    setSeconds(seconds) {
        this._seconds = (60 + seconds) % 60;
        return (seconds - this._seconds) / 60;
    }

    setMinutes(minutes) {
        this._minutes = (60 + minutes) % 60;
        return (minutes - this._minutes) / 60;
    }

    setHours(hours) {
        this._hours = (24 + hours) % 24;
    }

    toString() {
        return `${this._hours}:${
            TimeSpan.addLeadingZero(this._minutes)}:${
            TimeSpan.addLeadingZero(this._seconds)}`;
    }

    static addLeadingZero(number) {
        return (number < 10) ? `0${number}` : number;
    }
}


//For testing
try {
    console.log('' + new TimeSpan(7, 8, 5));        //7:08:05
    console.log('' + new TimeSpan(12, 76, -5));     //13:15:55
    console.log('' + new TimeSpan('', 2.5, {}));    //RangeError: Invalid hours:
    console.log('' + new TimeSpan(3, 2.5, {}));     //RangeError: Invalid minutes: 2.5
    console.log('' + new TimeSpan(3, 2, {}));       //RangeError: Invalid seconds: [object Object]
} catch (e) {
    console.log(e.message);
}
