function getPermutations(sentence, word) {
  const words = sentence.split(" ");
  const filteredWords = words.filter((w) => w.includes(word));

  const permutations = [];
  for (let i = 0; i < filteredWords.length; i++) {
    const permutation = [];
    for (let j = 0; j < filteredWords.length; j++) {
      permutation.push(filteredWords[(i + j) % filteredWords.length]);
    }
    permutations.push(permutation);
  }

  return { words: filteredWords, permutations: permutations };
}

const result = getPermutations("THIS IS AN ISSUE FROM GIHAN", "IS");
console.log(result);