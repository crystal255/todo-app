import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
// in order to use FirstComponent, need to import it
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp';
 
// create class App, this newly created class extends the React Component class
// in this way, we created a component
// also the next thing is to implement the render() function - always needed when defining new Component class
// THIS IS A MUST DO!!!

// ATTENTION: React component needs to START with CAPITAL letter
// i.e. App, FirstComponent, SecondComponent, ThirdComponent
// small letters are reserved for the html like tags

// need to import React in order to use JSX
// "Component" is a class in React. Create a component is using "extends", then implement render() function

// "App" is the parent component
class App extends Component {
  render() {
    return (
      // since App is the root element, for anything we want to show in the app
      // we would need to include the component name in <> in the render function under App
      // NOTE: <FirstComponent /> == <FirstComponent></FirstComponent>

      // JSX is javascript extension, allows you to use html in javascript code
      // anything you want to show in the app, you need to add it to the "App" component
      // Note 1: JSX can only have one parent element
      // Note 2: you can use empty <> </>
      // Note 3: in JSX, all node has to be closed

      // Babel convert the html in javascript block to javascript compatible code
      // Babel bigger goal is to allow you write code in latest javascript version, then compile it to earlier js version

      // assign value to an varible "by". to assign it integer value, need to do JSX object {}
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}


class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">  
        Kola's Hello World!
        <FirstComponent /> 
        <SecondComponent />
        <ThirdComponent />
      </div>
    )
  }
}


export default App;

