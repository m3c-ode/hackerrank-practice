function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let pairs = 0;
  let indexPaired: number[] = [];
  for (let index = 0; index < n; index++) {
    const sock = ar[index];
    const found = ar.indexOf(sock, index + 1);
    if (
      found > 0 &&
      !indexPaired.includes(index) &&
      !indexPaired.includes(found)
    ) {
      pairs++;
      indexPaired.push(index, found);
    }
  }
  return pairs;
}

function sockMerchantMap(n: number, ar: number[]): number {
  // Write your code here
  let pairs = 0;
  let map: { [key: number]: number[] } = {};
  for (let index = 0; index < n; index++) {
    const sock = ar[index];
    map[sock] ? map[sock].push(index) : (map[sock] = [index]);
  }
  for (const sockColor in map) {
    if (Object.prototype.hasOwnProperty.call(map, sockColor)) {
      const indexArray = map[sockColor];
      const pairsOfColor = Math.trunc(indexArray.length / 2);
      pairs += pairsOfColor;
    }
  }
  return pairs;
}

function sockMerchantSet(n: number, ar: number[]): number {}

const n = 9;
const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log("1st test", sockMerchant(n, array));
console.log("2ndtest", sockMerchantMap(n, array));
