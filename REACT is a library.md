REACT is a library.
REACT is made for a lot of updates
jQuery is used to use plugin but you shouldn't because jQuery is DOM heavy.

== We use a lot of OOP in react===
class Car {
	constructor(color, make){

		this.color = color;
		this.make = make;
	}

	printCar(){
		console.log(`I have a ${this.make} and it is ${this.color}.`)
	}
}

class ElectricCar extends Car{
	
}

var myCar = new Car("lime green", "tesla");
myCar.printCar();

var erickCar = new Car("blue","bug");
erickCar.printCar();

==================================
React - the react top level api
React DOM - adds DOM-specific methods
Babel - a JS complier to unable ES6 to use in old browser

==================================
Sudo npm install -g create-react-app
create-react-app my-app  //name must be all lowercase
npm install