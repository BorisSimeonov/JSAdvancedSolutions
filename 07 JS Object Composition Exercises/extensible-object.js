function result() {
    let myObj = {};
    myObj.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] !== 'function') {
                myObj[prop] = template[prop];
            } else {
                Object.getPrototypeOf(myObj)[prop] = template[prop];
            }
        }
    };
    return myObj;
}
