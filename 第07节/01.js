function fruits() {}

fruits.prototype = {
  color: 'red',
  say: function () {
    console.log('My color is ' + this.color)
  }
}

var apple = new fruits();
apple.say();

var banana = {
  color: 'yellow'
}
apple.say.call(banana)
apple.say.apply(banana)
