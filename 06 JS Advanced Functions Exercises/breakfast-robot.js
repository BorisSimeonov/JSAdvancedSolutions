(function () {
        let stock = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };

        function failPrint(missingElement) {
            return `Error: not enough ${missingElement} in stock`;
        }

        function successPrint() {
            return 'Success';
        }

        let commandExecutor = {
            restock: (microElement, quantity) => {
                stock[microElement] += Number(quantity);
                return successPrint();
            },
            report: () => {
                return `protein=${stock.protein} ` +
                    `carbohydrate=${stock.carbohydrate} ` +
                    `fat=${stock.fat} ` +
                    `flavour=${stock.flavour}`;
            },
            prepare: (mealName, quantity) => {
                quantity = Number(quantity);
                switch (mealName) {
                    case 'apple':
                        if (stock.carbohydrate < quantity) {
                            return failPrint('carbohydrate');
                        }
                        if (stock.flavour < (2 * quantity)) {
                            return failPrint('flavour');
                        }
                        stock.flavour -= 2 * quantity;
                        stock.carbohydrate -= quantity;
                        break;
                    case 'coke':
                        if (stock.carbohydrate < 10 * quantity) {
                            return failPrint('carbohydrate');
                        }
                        if (stock.flavour < 20 * quantity) {
                            return failPrint('flavour');
                        }
                        stock.flavour -= 20 * quantity;
                        stock.carbohydrate -= 10 * quantity;
                        break;
                    case 'burger':
                        if (stock.carbohydrate < 5 * quantity) {
                            return failPrint('carbohydrate');
                        }
                        if (stock.fat < 7 * quantity) {
                            return failPrint('fat');
                        }
                        if (stock.flavour < 3 * quantity) {
                            return failPrint('flavour');
                        }
                        stock.flavour -= 3 * quantity;
                        stock.carbohydrate -= 5 * quantity;
                        stock.fat -= 7 * quantity;
                        break;
                    case 'omelet':
                        if (stock.protein < 5 * quantity) {
                            return failPrint('protein');
                        }
                        if (stock.fat < quantity) {
                            return failPrint('fat');
                        }
                        if (stock.flavour < quantity) {
                            return failPrint('flavour');
                        }
                        stock.flavour -= quantity;
                        stock.protein -= 5 * quantity;
                        stock.fat -= quantity;
                        successPrint();
                        break;
                    case 'cheverme':
                        if (stock.protein < 10 * quantity) {
                            return failPrint('protein');
                        }
                        if (stock.carbohydrate < 10 * quantity) {
                            return failPrint('carbohydrate');
                        }
                        if (stock.fat < 10 * quantity) {
                            return failPrint('fat');
                        }
                        if (stock.flavour < 10 * quantity) {
                            return failPrint('flavour');
                        }
                        stock.carbohydrate -= 10 * quantity;
                        stock.flavour -= 10 * quantity;
                        stock.protein -= 10 * quantity;
                        stock.fat -= 10 * quantity;
                        break;
                }
                return successPrint();
            }
        }

        return function inputParser(commandLine) {
            let [command, item, quantity] = commandLine.split(/\s+/);
            return commandExecutor[command](item, quantity);
        }
    })();
