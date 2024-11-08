{
// Problem 3
    
const countWordOccurrences = (sentence: string, word: string): number  =>{
    const normalizedSentence: string = sentence.toLowerCase();
    const words: string[] = normalizedSentence.split(' ')
    let occurrences: number = 0;

    words.forEach((str: string) => {
        if (str === word) {
            occurrences++
        }
    })

    return occurrences;
}
    
const result = countWordOccurrences("I love typescript", "typescript");

console.log(result);

}