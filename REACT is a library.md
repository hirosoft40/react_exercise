REACT is a library.
REACT is made for a lot of updates
jQuery is used to use plugin but you shouldn't because jQuery is DOM heavy.

## What's in React?

React - the react top level api
React DOM - adds DOM-specific methods
Babel - a JS complier to unable ES6 to use in old browser

## How to install

Sudo npm install -g create-react-app
create-react-app my-app //name must be all lowercase
npm install // install dependencies

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

- Readonly.immutable(const)
- includes data that we give to the component
- System for passing data from a parent component to a child component
  --> Goal is to customize or configure a child component

state: Mutable. Remember the data. includes data that is local or private to component. Within the Component.
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

## How to decide which Component Style to - first

[1] Functional Components
Good for simple content
[2] Class Components
Good for just about everything else.

- Easier code organization
- Can use 'state' -> Easier to handle user iput
- Undestands lifecycle events -> Easier to do things when the app first starts

## Rule of Class Components

Must be a JavaScript Class
Must extend(subclass) React.Component
Must define a 'render' method that returns some amount of JSX

## Rule of State: keep state in parent. Then pass info by props to children

[1] Only usable with class components
use 'hooks' system for functional component
[2] Props and States are easy to get mixed up
[3] 'State' is a JS object that contains data relevant to a singular compponent
[4] Updating 'state' on a component causes the component to (almost) instantly rerender
[5] State must be initialized when a component is created
[6] State can only be updated using the function 'setState'
When rendered that we get reactElement(Vertual DOM), then react will check a copy of old DOM and compare. That's why we should not update state directly. Then react will update accordingly.

## Component Lifecycle

[1] Mounting
constructor //==> DO NOT DO DATA LOADING. STAY SIMPLE
||
componentWillMount
||
render
||
(content visible on screen )
||
componentDidMount //==> GOOD PLACE TO DATA LOADING.
==

[2] Updating : props
componentWillReceiveProps
||
shouldComponentUpdate
||true \* if false, stop
componentWillUpdate
||
render
||
componentDidUpdate

[3] Updating : states
shouldComponentUpdate
||true \* if false, stop
componentWillUpdate
||
render
||
componentDidUpdate

[4]Unmounting
componentWillUnmount

## Type of EventHandler

名付け：
on + element+ event that we are watching for(onInputChange)
handle + element+ event that we are watching for(handleInputChange)

Anytime we pass a prop down into a component that we are creating, we refer prop with onSubmit.

[1]onClick ==> User clicks on something
Whenever user clicks on something, handle event.

[2]onChange ==> User changes text in an input
Whenever there is a change in input, or something,
this event handler can be called.

- this onChange will not apply to div as div will not change

[3]onSubmit ==> User submit a form
Submit a form

- this onSubmit apply to elements that can submit only

## Flow (to show location)

[1] JS file loaded by browser
[2] Instance of App component is created
[3] App components 'constructor' function gets called
[4] State object is created and assigned to the 'this.state' property
[5] We call geolocation service
[6] React calls the components render method
[7] App returns JSX, get rendered to pages as HTML
...
[8] get result of geolocation
[9] We update our state object with a call to 'this.setState'
[10] React sees that we updated the state of a component
[11] React calls our 'render' method a second time
[12] Render method returns some (updated) JSX
[13] React takes that JSX and updates content on the screen

## Flow (to show Userinput)

[1] User types in input
[2] callback gets invoked
[3] we call setState with new value
[4] Component rerenders
[5] Input is told what its value is (coming from state)

## How to find out what is "this"

Don't look at the method that this is written.
Checkout where this is called

## React refs

- gives access to a single DOM element
- We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props

## Sample Class

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
