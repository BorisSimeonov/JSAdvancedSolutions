function result(selector) {
    let current = $(selector);
    let deepest = {depth: -1, element: undefined};
    let depth = 0;

    function selectLower(currentElement, depth) {
        //console.log(currentElement + "|" + depth);
        let children = $(currentElement).children();
        if (children.length === 0) {
            if (depth > deepest.depth) {
                deepest.depth = depth;
                deepest.element = $(currentElement);
            }
        } else {
            for (let element of children) {
                selectLower(element, depth + 1);
            }
        }
    }

    selectLower(current, depth);

    while (deepest.depth >= 0) {
        let classes = deepest.element.attr('class') + ' highlight';
        deepest.element.attr('class', classes);
        //console.log(deepest.element.attr('class'));
        deepest.element = deepest.element.parent();
        deepest.depth--;
    }
}
