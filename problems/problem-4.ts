type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
    let area: number;

    if (shape.shape === "circle") {
        area = Math.floor(Math.PI * shape.radius * shape.radius * 100) / 100;
        return area;
    } else if (shape.shape === "rectangle") {
        area = Math.floor(shape.height * shape.width * 100) / 100;
        return area;
    }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea); // Output: 78.53

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

console.log(rectangleArea); // Output: 24
