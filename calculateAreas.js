function calculateRectangleArea (length, width) {
    const recArea = length * width;
    if (recArea > 0) {return recArea}
    else {undefined}
}

console.log (calculateRectangleArea(10, -5))

function calculateTriangleArea (base, height) {
    const triArea = (base * height)/2;
    if (triArea > 0) {return triArea}
    else {undefined}
}

console.log(calculateTriangleArea(10, -5))


function calculateCircleArea(radius){

    if (radius >= 0) {return Math.PI * (radius * radius)}
    else {undefined}
}

console.log(calculateCircleArea(3.5))