class Checkbox {
    constructor(label, selector) {
        this._label = label;
        this._selector = selector;
        this._value = $(selector).is(':checked');

        this.elements.on('change', () => {
            this.value = $(this.elements).is(':checked');
        });
    }

    set value(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Checkbox value must be boolean.');
        }

        this._value = newValue;
        $(this.elements).prop('checked', newValue);
    }

    get elements() {
        return $(this._selector);
    }

    get value() {
        return $(this.elements).is(':checked');
    }

    get label() {
        return this._label;
    }
}

module.exports = Checkbox;