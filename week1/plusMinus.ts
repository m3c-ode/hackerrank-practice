export function plusMinus(arr: number[]): void {
  // Write your code here
  let negatives = 0,
    positives = 0,
    zeros = 0;
  for (const num of arr) {
    if (num < 0) negatives++;
    if (num === 0) zeros++;
    if (num > 0) positives++;
  }
  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
