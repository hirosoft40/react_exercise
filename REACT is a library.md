REACT is a library.
REACT is made for a lot of updates
jQuery is used to use plugin but you shouldn't because jQuery is DOM heavy.

##Application Overview

<h3>Component Nesting</h3>
A component can be shown inside of another
<h3>Component Reusability</h3>
We want to make components that can be easily reused through out application
<h3>Component Configuration</h3>
We should be able to configure a comonent when it is created

## Creating a reusable Configurable Component

[1] Identify the JSX that appears to be duplicated
[2] What is the purpose of that block of JSX? Think of a descriptive name for what it does
[3] Create a new file to house this new component - it should have the same name as the component
[4] Create a new component in the new file, paste the JSX into it
[5] Make the new component configurable by using React's 'props' system

## props = properties
System for passing data from a parent component to a child component
--> Goal is to customize or configure a child component

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
create-react-app my-app //name must be all lowercase
npm install

==================================
call bind and apply
"Call" ==> Control who is "this"

==================================
props: Readonly.immutable(const):includes data that we give to the component
state: mutable. Remember the data. includes data that is local or private to component. Within the Component.
The state of one component often becomes the props of the child component.
Props are passed to the child within the render method of the parent as the second argument.
<Counter value ={this.state.value} />
<MyChild name = {this.state.childsName} />

The parent's state value of childsName becomes the child's this.props.name. From the child's perspective, the name props is immutable. If it needs to be changed, the parent should just change its internal state:
this.setState({childName:"New name"});

and React will propagate it to the child for you. A natural follow-on question is: what if the child needs to change its name prop? This is usually done through child events and parent callbacks. The child might expose an event called, for example, onNameChanged. The parent would then subsrcibe to the event by passing a callback handler.

<MyChild name={this.state.childName} onNameChanged={this.handleName} />

The child would pass its requested new name as an argument to the event callback by calling, e.g..
this.props.onNameChanged('New name'), and the parent would use the name in the event handler to update its state.

handleName: function (newName){
this.setState({ childName: newName});
}

=======
When rendered that we get reactElement(Vertual DOM), then react will check a copy of old DOM and compare. That's why we should not update state directly. Then react will update accordingly.
=======
keep state in parent app. Then pas infor by props
