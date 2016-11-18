let Checkbox = require('./checkbox');
let Numberbox = require('./numberbox');

result.Checkbox = Checkbox;
result.Numberbox = Numberbox;


/*//For testing purposes
 class Checkbox {
 constructor(label, selector) {
 this._label = label;
 this._selector = selector;
 this.elements.on('change', () => {
 this.value = $(this.elements).is(':checked');
 });
 this._value = $(selector).is(':checked');
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

 class Numberbox {
 constructor(label, selector, minValue, maxValue) {
 this._label = label;
 this._selector = selector;
 this.minValue = minValue;
 this.maxValue = maxValue;
 $(this.elements).on('change', () => {
 this.value = Number($(this.elements).val());
 });
 this.value = minValue;
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

 let check = new Checkbox("Is Married:", "#married");
 let number = new Numberbox("Age:", "#age", 1, 100);
 let checkbox = $('#married');
 let numberbox = $('#age');


 checkbox.on('change', ()=>console.log(check.value));
 numberbox.on('change', ()=>console.log(number.value));
 */