class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR!");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}



// practise
class Pet {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	eat(){
		return `${this.name} is eating`;
	}
}

class Dog extends Pet{
	constructor(name,age,lives){
		super(name,age);
		this.livesLeft=this.livesLeft;
	}
	bark(){
		return `${this.name} is barking`;
	}
}

class Cat extends Pet{
	meow(){
		return `${this.name} is meowing`;
	}
}