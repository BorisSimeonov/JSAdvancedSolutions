let Record = (() => {
    let idCounter = 0;
    class MeteoRecord {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = idCounter;
            idCounter++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }
        toString() {
            return `Reading ID: ${ this.id }\n`+
                `Temperature: ${ this.temperature }*C\n` +
                `Relative Humidity: ${ this.humidity }%\n` +
                `Pressure: ${ this.pressure }hpa\n` +
                `Wind Speed: ${ this.windSpeed }m/s\n` +
                `Weather: ${ this.getWeather() }`;
        }
        getWeather() {
            if(this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                return "Stormy"
            }
            return "Not stormy";
        }
    }
    return MeteoRecord;
})();


let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
