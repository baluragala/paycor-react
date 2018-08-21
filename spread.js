const username = "zoelearn";

const chars = [];
for (let i = 0; i < username.length; i++) {
  chars.push(username[i]);
}

console.log(chars);

//

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2, 7, 8];

//

const o1 = { name: "john", address: { city: "ny" } };
const o2 = { age: 26 };
const o3 = { ...o1, ...o2, grade: "A", address: { ...o1.address } };
