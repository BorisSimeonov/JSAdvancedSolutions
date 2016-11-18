function argumentInfo() {
    let argumentsObject = {};
    let argType;

    for (let arg of arguments) {
        argType = typeof arg;
        if (argumentsObject[argType]) {
            ++argumentsObject[argType];
        } else {
            argumentsObject[argType] = 1;
        }
        console.log(`${argType}: ${arg}`);
    }

    Object.keys(argumentsObject)
        .sort((a, b) => {
            return argumentsObject[b] - argumentsObject[a];
        })
        .forEach(item => console.log(item + " = " + argumentsObject[item]));
}
