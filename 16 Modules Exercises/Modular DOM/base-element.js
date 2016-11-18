class BaseElement {
    constructor() {
        if (new.target === BaseElement) {
            throw new Error('BaseElement is abstract class');
        }
        this.element = null;   //Stores jQuery element
    }

    appendTo(selector) {
        $(selector)
            .append(this.createElement());
    }

    createElement() {
        this.element = $(this.getElementString());
        return this.element;
    }

    getElementString() {
        //To be implemented form child classes
    }
}

module.exports = BaseElement;