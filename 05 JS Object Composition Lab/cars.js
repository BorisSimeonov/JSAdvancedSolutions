function listProcessor(input) {
    let commandExecutor = (function () {
        let objectsMap = new Map();
        let engine = {
            print: (name) => {
                let properties = [];
                for (let key of Object.keys(objectsMap.get(name))) {
                    if (key !== "inheritsFrom") {
                        properties.push(key + ":" + objectsMap.get(name)[key]);
                    }
                }

                for (let superClass of objectsMap.get(name).inheritsFrom) {
                    checkSuperclassForInheritance(superClass)
                }

                function checkSuperclassForInheritance(name) {
                    let inheritanceList = [];
                    for (let key of Object.keys(objectsMap.get(name))) {
                        if (key != "inheritsFrom") {
                            properties.push(key + ":" + objectsMap.get(name)[key]);
                        } else {
                            inheritanceList = objectsMap.get(name)[key];
                        }
                    }

                    for (let superClass of inheritanceList) {
                        checkSuperclassForInheritance(superClass);
                    }
                }

                console.log(properties.join(', '));
            },
            create: (name) => {
                if (!objectsMap.get(name)) {
                    objectsMap.set(name, {"inheritsFrom": []});
                }
            },
            createInherit: (fromName, newName) => {
                engine.create(newName);
                objectsMap.get(newName).inheritsFrom.push(fromName);
            },
            setProperty: (setTo, key, val) => {
                objectsMap.get(setTo)[key] = val;
            }
        };
        return {
            execute: function (parameters) {
                switch (parameters[0]) {
                    case 'create':
                        if (parameters.length === 2) {
                            engine.create(parameters[1]);
                        } else {
                            engine.createInherit(
                                parameters[3],
                                parameters[1]
                            );
                        }
                        break;
                    case 'set':
                        engine.setProperty(
                            parameters[1],
                            parameters[2],
                            parameters[3]
                        );
                        break;
                    case 'print':
                        engine[parameters[0]](parameters[1]);
                        break;
                    default:
                        break;
                }
            }
        }
    })();
    for (let commandline of input) {
        let parameters = commandline.split(/\s+/g);
        commandExecutor.execute(parameters);
    }
}
