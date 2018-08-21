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
