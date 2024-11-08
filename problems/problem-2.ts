{
// Problem 2

const removeDuplicates = (arr: number[]): number[] => {
    const selected: number[] = [];

    arr.forEach((number: number) => {
        if (selected.indexOf(number) === -1) {
            selected.push(number);
        }
    })

    return selected; 
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log(result); // Output: [1, 2, 3, 4, 5]

}