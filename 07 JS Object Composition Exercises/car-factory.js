function carAssembler(requirements) {
    let enginesInStock = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];
    let assembledCar = {};
    assembledCar.model = requirements.model;
    assembledCar.engine = (()=> {
        for (let engine of enginesInStock) {
            if (engine.power >= requirements.power) {
                return engine;
            }
        }
    })();
    assembledCar.carriage = (() => {
        return {
            type: requirements.carriage,
            color: requirements.color
        };
    })();
    assembledCar.wheels = (() => {
        let size;
        if (requirements.wheelsize % 2 === 0) {
            size = --requirements.wheelsize;
        } else {
            size = requirements.wheelsize;
        }
        return [size, size, size, size];
    })();
    return assembledCar;
}
