import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Friends from './Friends';

class App extends Component{
  render(){
    // let friends = [
    //   {'name':'Hiroko', 'age':20},
    //   {'name':'Tomoko', 'age':21},
    //   {'name':'Satoko', 'age':18},
    //   {'name':'Yoko', 'age':28},
    // ]

    let friends =['Hiroko','Tomoko']

    return (
      <div>
        <h1>These friends can attend Moon Tower.</h1>
        <Friends key={friends} friend={friends} />
        <br/>
        <Hello name="Hiroko"/>

      </div>
    )
  }
}

export default App;
