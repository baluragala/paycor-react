let members = ["jim", "kim", ["lim", "pim", "bim"]];
// const manager = members[0];
// const lead = members[1];
// const engineers = members.slice(2, members.slice);

const [manager, lead, engineers] = members;

//let members = ["jim", "kim", "lim", "pim", "bim"];

//const [manager, lead, ,...engineers] = members;

const response = {
  title: "JS in 24hrs",
  author: { first: "Kyle", last: "simpson" },
  isAvailable: true,
  p1: 1,
  P2: 3,
  plan: 6
};

const {
  isAvailable,
  title: bookTitle,
  author: { first },
  plan = "n/a"
} = response;
