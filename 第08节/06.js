class Animal {
  constructor () {
    this.type = 'animal'
  }
  say (say) {
    console.log(this.type + ' says ' + say)
  }
}

let animal = new Animal()
animal.say('hello')


class Cat extends Animal{
  constructor(props) {
    super(props)
    this.type = 'cat'
  }
}

let cat = new Cat()
cat.say('hello')
