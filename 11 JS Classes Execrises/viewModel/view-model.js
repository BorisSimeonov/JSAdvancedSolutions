class Textbox {
    constructor(domSelector, regExp) {
        this.selector = domSelector;
        this._element = $(domSelector);
        this._invalidSymbols = regExp;

        let classThis = this;
        $(domSelector).on('input change paste', function () {
            classThis.value = $(this).val();
        });
    }



    get value() {
        return this._value;
    }

    set value(newValue) {
        $(this.selector).val(newValue);
        this._value = newValue;
    }

    isValid() {
        return !this.value.match(this._invalidSymbols);
    }

    get elements() {
        return this._element;
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});