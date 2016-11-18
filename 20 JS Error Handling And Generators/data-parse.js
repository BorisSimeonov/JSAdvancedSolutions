function makeCandy(recipeArray) {
    class Candy {
        constructor(topping, filling, spice) {
            this.topping = topping;
            this.filling = filling;
            this.spice = spice;
        }
    }
    let candyArray = [];
    let validationRecipePattern = new RegExp(
        "^(milk chocolate|white chocolate|dark chocolate):[^:]*:[^:]*$"
    );

    for (let recipe of recipeArray) {
        if(recipe.match(validationRecipePattern) != null) {
            let [topping, filling, spice] = recipe.split(':');
            try {
                filling = validateFillingValue(filling);
                spice = validateSpiceValue(spice);
                candyArray.push(new Candy(topping, filling, spice));
            } catch (e) {
                //no handling by requirement
            }
        }
    }

    function validateFillingValue(fillingValue) {
        let validIngredients = ['hazelnut', 'caramel', 'strawberry',
            'blueberry', 'yogurt', 'fudge', ''];

        fillingValue = fillingValue.split(/,/g).filter(function (item) {
            if(item.length < 1) return false;
            return true;
        });
        if (fillingValue.length > 3)
            throw new TypeError('Invalid filling value.');
        fillingValue.forEach(value => {
            if (validIngredients.indexOf(value) < 0)
                throw new TypeError('Invalid filling value.');
        });

        fillingValue = fillingValue.join(',');
        return fillingValue || null;
    }

    function validateSpiceValue(spiceValue) {
        let invalidSpice = ['poison', 'asbestos'];
        if (spiceValue === '') {
            spiceValue = null;
        } else if (invalidSpice.indexOf(spiceValue) !== -1) {
            throw new TypeError('Invalid spice value.');
        }
        return spiceValue;
    }

    return candyArray;
}


let result = makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
]);

console.log(result);