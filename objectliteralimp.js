let title = "you dont know js";
let author = "kyle";

const bookES5 = {
  title: title,
  author: author,
  describe: function() {}
};

const book = { title, author, describe() {}, [title + " " + author]: "" };
