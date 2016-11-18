function commandProcessor(input) {
    let commandExecutor = (function () {
        let textResult = "";
        return {
            append: (text) => textResult += text,
            removeStart: (count) =>
                textResult = textResult.slice(Number(count)),
            removeEnd: (count) =>
                textResult = textResult.slice(0, textResult.length - Number(count)),
            print: function () {
                console.log(textResult)
            }
        }
    })();

    for (let line of input) {
        let [commandName, arg] = line.split(/\s+/);
        commandExecutor[commandName](arg);
    }
}
