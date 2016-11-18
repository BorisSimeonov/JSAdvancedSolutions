let data = require('./data');

function sort(property) {
    data = data.sort((a, b) => {
        return a[property].localeCompare(b[property]);
    });
    return data;
}

function filter(property, value) {
    let matchesArray = [];
    for (let dataObj of data) {
        if(dataObj[property] === value) {
            matchesArray.push(dataObj);
        }
    }
    return matchesArray;
}

module.exports = {
    sort,
    filter
};

//For testing purposes
/*console.log(sort('shipTo'));
console.log(filter('status', 'delivered'));*/
