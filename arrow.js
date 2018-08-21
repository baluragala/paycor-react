const scores = [60, 40, 56, 77, 89];
scores.filter(function(s) {
  return s > 60;
});

scores.filter(s => s > 60);

scores.filter(s => s > 60);

//auto bind
// .call, .apply and .bind
// context

function Person(age) {
  this.age = age;
  this.describe = () => {
    console.log(`Perons age is ${this.age}`);
  };
}
