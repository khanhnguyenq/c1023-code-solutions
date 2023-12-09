export type Result = {
  [index: string]: number;
};

export function charCounts(word: string): Result {
  const obj: Result = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
