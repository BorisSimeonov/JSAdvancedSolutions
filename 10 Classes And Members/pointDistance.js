class Point {
    constructor(xPos, yPos) {
        [this.x, this.y] =
            [xPos, yPos];
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}



//For testing purposes:
console.log(
    Point.distance(
        new Point(2,3),
        new Point(33,-12)
    )
);