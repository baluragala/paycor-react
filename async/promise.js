// const p1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     reject({ message: "rejected" });
//   }, 5000);
// });

// p1.then(function(data) {
//   console.log(`Promise says ${JSON.stringify(data)}`);
// }).catch(function(err) {
//   console.error(`Promise rejected : ${JSON.stringify(err)}`);
// });

function doWork() {
  step1();
  step2()
    .then(() => step3())
    .then(() => step4())
    .catch(err => console.error(err));
}

function step1() {
  console.log(1);
  console.log(2);
  console.log(3);
}

function step2() {
  const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(4);
      console.log(5);
      resolve();
    }, 1000);
  });
  return p;
}

function step3() {
  const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(6);
      console.log(7);
      console.log(8);
      resolve();
    }, 1000);
  });
  return p;
}

function step4() {
  console.log(9);
  console.log(10);
}
