// let title = "you dont know js";
// let author = "kyle";

// const bookES5 = {
//   title: title,
//   author: author,
//   describe: function() {}
// };

// for (const prop in bookES5) {
//   console.log(bookES5[prop]);
//}

let title = "you dont know js";
let author = "kyle";

const bookES5 = {
  title: title,
  author: author,
  describe: function() {}
};
bookES5[Symbol.iterator] = function values() {
  let keys = Object.keys(bookES5);
  let index = 0;
  return {
    next() {
      if (index < keys.length) {
        const prop = keys[index++];
        return { value: [prop, bookES5[prop]], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

// bookES5[Symbol.iterator] = function values() {
//   return {};
// };
