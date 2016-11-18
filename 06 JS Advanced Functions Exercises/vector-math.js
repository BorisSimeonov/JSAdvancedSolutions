(function vectorMath() {
    let namespaceObj = {
        add: function (vOne, vTwo) {
            return [(vOne[0] + vTwo[0]),
                (vOne[1] + vTwo[1])];
        },
        multiply: function (vector, scalar) {
            return vector.map(x => x * scalar);
        },
        length: function (v) {
            return Math.sqrt(
                Math.pow(v[0], 2) +
                Math.pow(v[1], 2)
            );
        },
        dot: function (vOne, vTwo) {
            return (vOne[0] * vTwo[0]) +
                (vOne[1] * vTwo[1]);
        },
        cross: function (vOne, vTwo) {
            return (vOne[0] * vTwo[1]) -
                (vOne[1] * vTwo[0]);
        }
    }
    return namespaceObj;
})()
