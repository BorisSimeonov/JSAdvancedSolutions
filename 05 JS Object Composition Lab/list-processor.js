function listProcessor(input) {
    let commandExecutor = (function () {
        let result = [];
        return {
            add: (value) => result.push(value),
            print: function () {
                console.log(result.join(','));
            },
            remove: function (value) {
                result = result.filter((val) => value !== val);
            }
        };
    })();
    for (let commandline of input) {
        let [command, value] = commandline.split(/\s+/);
        commandExecutor[command](value);
    }
}
