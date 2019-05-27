// classical inheritance

// function Person(name) {
//   this.name = name || 'Tony';
// }

// Person.prototype.sayHi = function() {
//   return 'hi ' + this.name;
// };

// function Child(name) {
//   Person.apply(this, [name]);
// }

// Child.prototype = Person.prototype;

// Child.prototype.sayHi = function() {
//   return 'hello ' + this.name;
// };

// const pupil = new Child('Adam');

// console.log(pupil.sayHi());

//  --------------------------------------------------

// prototypal inheritance
function Universe() {
  if (typeof Universe.instance === 'object') {
    return Universe.instance;
  }

  this.start_time = 0;
  this.bang = 'Big';

  Universe.instance = this;
}

var uni = new Universe();
var uni2 = new Universe();
console.log('uni === uni2');
console.log(uni === uni2); // true
