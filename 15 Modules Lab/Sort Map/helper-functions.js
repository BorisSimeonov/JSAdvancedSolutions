function mapSort(map, sortFn){
    let sortedArr = [];
    for(let value of map) {
        sortedArr.push(value);
    }

    if(sortFn !== undefined){
        sortedArr.sort(sortFn);
    } else {
        sortedArr.sort((a, b) => {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            else return 0;
        });
    }
    return new Map(sortedArr);
}

module.exports.mapSort = mapSort;