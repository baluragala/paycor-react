let nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

let title = "you dont know js";
let author = "kyle";

const bookES5 = {
  title: title,
  author: author,
  describe: function() {}
};

for (const prop in bookES5) {
  console.log(bookES5[prop]);
}

for (let n of nums) {
  console.log(n);
}
