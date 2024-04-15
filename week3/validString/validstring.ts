function isValid(s: string): string {
  // Write your code here
  let set: Set<string> = new Set();
  let multiples = 0;
  for (const char of s) {
    set.has(char) ? multiples++ : set.add(char);
    // if (multiples > 1) return "NO";
  }
  console.log("🚀 ~ isValid ~ set:", set);
  console.log("set size", set.size);
  console.log("🚀 ~ isValid ~ multiples:", multiples);
  console.log("🚀 ~ isValid ~ s.length:", s.length);
  console.log(multiples % set.size);
  // if (multiples + set.size === s.length && multiples % set.size <= 1) {
  if (multiples <= 1) return "YES";
  // if (Math.abs(set.size - multiples) >= 2) {
  if (multiples % set.size <= 1) {
    return "YES";
  }
  // return "NO";
  return "NO";
}

function otherIsValid(s: string): string {
  const charsSet: Set<string> = new Set(s);
  const charsOccurs: number[] = Array.from(charsSet).map((c) => {
    console.log("split", s.split(c));
    return s.split(c).length - 1;
  });
  console.log("🚀 ~ otherIsValid ~ charsOccurs:", charsOccurs);
  const minFrequency = Math.min(...charsOccurs);
  // IF the difference is inferior than 1 means that there would only be 1 character at most to change to get them all identically repeated
  if (s.length - minFrequency * charsSet.size <= 1) {
    return "YES";
  }
  const maxFrequency = Math.max(...charsOccurs);
  // If there's only 1 character repeated different than the max Frequency
  if (maxFrequency * charsSet.size - s.length === maxFrequency - 1) {
    return "YES";
  }
  return "NO";
}

// console.log(2 % 4);
// console.log(5 % 3);
// console.log(6 % 4);
// console.log(0 % 2);
// console.log(17 % 8);

const string = "abcdefghhgfedecba";
// console.log(isValid(string));
console.log(otherIsValid(string));
