class Animal {
  constructor () {
    this.type = 'animal'
  }
  say (val) {
    setTimeout( () => {
      console.log(this);
      console.log(this.type + ' says ' + val);
    }, 1000)
  }
}

let animal = new Animal();
animal.say('hi');

