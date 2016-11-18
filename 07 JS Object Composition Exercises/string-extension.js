(function () {
    String.prototype.isEmpty = function () {
        return this == '';
    };
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) return this.toString();
        return str + this.toString();
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) return this.toString();
        return this.toString() + str;
    };
    String.format = function (string, ...parameters) {
        return string.replace(/\{(\d+)}/g, (match, group) => {
            if (parameters.length <= Number(group)) {
                return match;
            }
            return parameters[Number(group)];
        });
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        } else if (this.length > n && this.indexOf(" ") != -1) {
            let str = this.split(' ');
            let result = "";
            for (let word of str) {
                if (result.length + word.length <= n - 3) {
                    if (result === "") {
                        result = word;
                    } else {
                        result = `${result} ${word}`;
                    }
                } else {
                    break;
                }
            }
            result += ".".repeat(3);
            return result;
        } else {
            if (this.length >= n + 3) {
                return this.slice(0, n - 3) + ".".repeat(3);
            } else {
                return ".".repeat(n);
            }
        }
    };
})();
