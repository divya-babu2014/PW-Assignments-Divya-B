
let str = "DIVYA BABU";

let charToFind = "B";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === charToFind) {
    count++;
  }
}

console.log(`The character '${charToFind}' occurs ${count} time(s).`);
