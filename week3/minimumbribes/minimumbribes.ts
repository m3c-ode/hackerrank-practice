function minimumBribesSwap(q: number[]): void {
  // Write your code here
  let bribes = 0;

  // Start from the end
  for (let index = q.length - 1; index >= 0; index--) {
    const element = q[index];
    // If successive numbers 2 index ahead are descending, swap them
    if (q[index - 2] > q[index - 1]) {
      [q[index - 2], q[index - 1]] = [q[index - 1], q[index - 2]];
      bribes++;
    }
    // so for 1 index ahead
    if (q[index - 1] > q[index]) {
      [q[index - 1], q[index]] = [q[index], q[index - 1]];
      bribes++;
    }
    // If we did the 2 swaps and the current index doesn't match its ordered value, it's too chaotic - more than 2 bribes were done to put it back in position
    if (q[index] !== index + 1) {
      return console.log("Too chaotic");
    }
  }
  // Numbers of swap is the numbers of bribes
  console.log(bribes);
}

function minimumBribesIndexed(q: number[]): void {
  // Write your code here
  let bribes = 0;
  for (let index = 0; index < q.length; index++) {
    // Get the difference with their start position
    const diff = q[index] - (index + 1);
    // If moore than 2, chaotic, but keep if less
    if (diff > 2) return console.log("Too chaotic");
    if (diff > 0) {
      bribes += diff;
      // If negative, it's been moved to the right, bribed, but check to the right if there's been more displacement. If sticker is inferior, current has bribed to move
    } else if (diff <= 0) {
      for (let j = index + 1; j < q.length; j++) {
        if (q[j] < q[index]) {
          bribes++;
        }
      }
    }
  }
  console.log(bribes);
}

const queue = [1, 2, 5, 3, 7, 8, 6, 4];
const chaoticQ = [2, 5, 1, 3, 4];

minimumBribesSwap(queue);
minimumBribesSwap(chaoticQ);
