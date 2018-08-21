// function sum(a, b) {
//   return a + b;
// }

// function sum() {
//   let total = 0;
//   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }

//   return total;
// }

// function sum(...numbers) {
//   let total = 0;
//   console.log(numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

function sum(s1, s2, ...numbers) {
  let total = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
