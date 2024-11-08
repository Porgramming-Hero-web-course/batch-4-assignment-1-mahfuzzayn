{
// Problem 1

const sumArray = (arr: number[]): number => {
    let sum: number = 0;
    arr.forEach((number: number) => sum += number);
    return sum;
}

const result1 = sumArray([1, 2, 3, 4, 5]);

console.log(result1);

}