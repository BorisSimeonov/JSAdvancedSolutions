function createCollection() {
    let coll = {
        size: 0,
        elements: []
    };
    coll.add = function (element) {
        coll.elements.push(element);
        coll.size += 1;
        coll.sort();
    };
    coll.sort = function () {
        coll.elements = coll.elements.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
    };
    coll.get = function (index) {
        if (index >= 0 &&
            index < coll.size) {
            return coll.elements[index];
        }
    };
    coll.remove = function (index) {
        if (index >= 0 &&
            index < coll.size) {
            coll.elements.splice(index, 1);
            --coll.size;
        }
    };
    return coll;
}
