let result = (function () {

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

    class Form {
        constructor(...textboxes) {
            this._element = $('<div>')
                .addClass('form');
            this._textboxes = textboxes;

            for (let tb of textboxes) {
                if (tb.constructor.name !== "Textbox") {
                    throw new Error("Invalid parameter type: " +
                        tb.constructor.name);
                } else {
                    this._element.append($(tb.selector));
                }
            }
        }

        submit() {
            let allValid = true;
            for (let tb of this._textboxes) {
                if (tb.isValid()) {
                    $(tb.selector).css('border', '2px solid green');
                } else {
                    $(tb.selector).css('border', '2px solid red');
                    allValid = false;
                }
            }
            return allValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
})();

let Textbox = result.Textbox;
let Form = result.Form;

let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
let usernameTextbox = $('#username');
let passwordTextbox = $('#password');
username.value = 'Pesho007';
console.log(username.isValid());
password.value = 'parola12';
console.log(password.isValid());
let form = new Form(username, password);
form.attach('#root');