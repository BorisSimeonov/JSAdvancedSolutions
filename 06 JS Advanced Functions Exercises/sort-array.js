function result(input, order) {
    let sotrer = {
        asc: (arr) => {
            arr = arr.sort(function (a, b) {
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            });
            return arr;
        },
        desc: (arr) => {
            arr = arr.sort(function (a, b) {
                if (a > b) return -1;
                if (a < b) return 1;
                return 0;
            });
            return arr;
        }
    };
    return sotrer[order](input);
}
