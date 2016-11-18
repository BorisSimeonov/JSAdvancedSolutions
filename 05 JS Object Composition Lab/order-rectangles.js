function rectangleSorter(input) {
    let rectangles = [];
    for (let param of input) {
        let width = param[0];
        let height = param[1];
        let area;
        let compareTo;
        let rectangle = {width, height, area, compareTo};
        rectangle.area = function () {
            return rectangle.width * rectangle.height;
        };
        rectangle.compareTo = function (otherRect) {
            if (rectangle.area() > otherRect.area()) return -1;
            if (rectangle.area() < otherRect.area()) return 1;
            if ((rectangle.area() === otherRect.area())) {
                if (rectangle.width > otherRect.width) return -1;
                if (rectangle.width < otherRect.width) return 1;
                return 0;
            }
        };
        rectangles.push(rectangle);
    }

    rectangles = rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}
