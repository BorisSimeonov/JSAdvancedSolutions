function createComputerHierarchy() {
    //Abstract Classes
    class Hardware {
        constructor(manufacturer) {
            if (new.target === Hardware) {
                throw new Error("Hardware is abstract class.");
            }
            this.manufacturer = manufacturer;
        }
    }
    class Computer extends Hardware {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Computer is abstract class.");
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    //Regular Classes
    class Keyboard extends Hardware {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Hardware {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Battery extends Hardware {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,
                    weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        set battery(batteryObj) {
            if (batteryObj.constructor.name !== "Battery") {
                throw new TypeError("Laptop battery accepts only Battery class instances.");
            }
            this._battery = batteryObj;
        }

        get battery() {
            return this._battery;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,
                    keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(keyboardObj) {
            if (keyboardObj.constructor.name !== "Keyboard") {
                throw new TypeError("Desktop keyboard accepts only Keyboard class instances.");
            }
            this._keyboard = keyboardObj;
        }

        get keyboard() {
            return this._keyboard;
        }

        set monitor(monitorObj) {
            if (monitorObj.constructor.name !== "Monitor") {
                throw new TypeError("Desktop monitor accepts only Monitor class instances.");
            }
            this._monitor = monitorObj;
        }

        get monitor() {
            return this._monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


