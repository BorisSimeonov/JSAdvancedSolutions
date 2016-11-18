(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.sum = function () {
        let sum = this[0];
        for (let i = 1; i < this.length; ++i) {
            sum += this[i];
        }
        return sum;
    };
    Array.prototype.take = function (n) {
        if (n > this.length) return this;
        return this.slice(0, n);
    };
    Array.prototype.skip = function (n) {
        //if(n > this.length) return this;
        return this.slice(n, this.length);
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;
    }
})();
