function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function() { // This is only on the a2 here
  alert("Hello, " + this.identify() + ".");
};

a1.constructor === Foo; // This go to the prototype chain
a1.constructor === a2.constructor;
a1.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__;

// __proto__ => we call it DUNDER PROTO
