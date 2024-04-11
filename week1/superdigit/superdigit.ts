/* We define super digit of an integer  using the following rules:

Given an integer, we need to find the super digit of the integer.

If  has only  digit, then its super digit is .
Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .
For example, the super digit of  will be calculated as:

	super_digit(9875)   	9+8+7+5 = 29
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2
Example


The number  is created by concatenating the string   times so the initial .

    superDigit(p) = superDigit(9875987598759875)
                  9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
    superDigit(p) = superDigit(116)
                  1+1+6 = 8
    superDigit(p) = superDigit(8)
All of the digits of  sum to . The digits of  sum to .  is only one digit, so it is the super digit.

Function Description

Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

superDigit has the following parameter(s):

string n: a string representation of an integer
int k: the times to concatenate  to make
Returns

int: the super digit of  repeated  times
Input Format

The first line contains two space separated integers,  and .

Constraints

 */

export function superDigitMe(n: string, k: number): number {
  let res = 0;
  res = calculateSuperDigit(n);
  if (k > 1) res += superDigitMe(n, k - 1);
  if (res >= 10) res = calculateSuperDigit(res.toString());

  // }

  return res;

  function calculateSuperDigit(n: string) {
    let sum = 0;
    if (n.length === 1 && k === 1) return Number(n);
    // else {
    for (const digit of n) {
      sum += parseInt(digit);
    }
    if (sum >= 10) return calculateSuperDigit(sum.toString());
    return sum;
  }
}

export function superDigitRed(n: string, k: number): number {
  let sum = n.split("").reduce((prev, curr) => prev + Number(curr), 0);
  let next = sum * k + "";
  return next.length === 1 ? Number(next) : superDigitRed(next, 1);
}

export function superDigit(n: string, k: number): number {
  let res = 0;

  for (const digit of n) {
    res += parseInt(digit);
  }

  if (k > 1) {
    return superDigit((res * k).toString(), 1);
  }
  if (res >= 10) {
    return superDigit(res.toString(), 1);
  }

  return res;
}

// const digits = "9875";
const digits = "123";
console.log(superDigitMe(digits, 3));

console.log(superDigit(digits, 3));
console.log(superDigitRed(digits, 3));
