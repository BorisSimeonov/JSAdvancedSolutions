class Numberbox {
    constructor(label, selector, minValue, maxValue) {
        this._label = label;
        this._selector = selector;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.value = minValue;

        $(this.elements).on('change', () => {
            this.value = Number($(this.elements).val());
        });
    }

    set value(newValue) {
        if (typeof newValue !== 'number' ||
            newValue < this.minValue ||
            newValue > this.maxValue) {
            throw new Error(`Numberbox value must be number in range ${
                this.minValue } and ${ this.maxValue }`);
        }

        this._value = newValue;
        $(this.elements).val(newValue);
    }

    get label() {
        return this._label;
    }

    get elements() {
        return $(this._selector);
    }

    get value() {
        return this._value;
    }
}

module.exports = Numberbox;