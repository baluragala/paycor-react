function doWork() {
  step1();
  step2(step3);
}

function step1() {
  console.log(1);
  console.log(2);
  console.log(3);
}

function step2(next) {
  setTimeout(function() {
    console.log(4);
    console.log(5);
    next(step4);
  }, 1000);
}

function step3(next) {
  setTimeout(function() {
    console.log(6);
    console.log(7);
    console.log(8);
    next();
  }, 1000);
}

function step4() {
  console.log(9);
  console.log(10);
}
