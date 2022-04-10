let input = "-9-8";
let arr = [];
for (let i = 0; i < input.length; i++) {
  if (
    input[i] === "+" ||
    input[i] === "-" ||
    input[i] === "/" ||
    input[i] === "*"
  ) {
    arr.push(input[i]);
  }
}

console.log(input.split("-"));
console.log(arr);
