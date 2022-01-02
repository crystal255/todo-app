import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {

  constructor() {
    super() ;
    this.state = {
      counter : 0
    }
  }

  render () {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div><button className='reset' onClick={this.reset}>Reset</button></div>
      </div>      
    )
  }

  reset = () => {
    this.setState (
      // define an arrow function to return what is in {} as an object
      () => {
        return {counter : 0}
      }
    ) ;
  }


  increment = (by) => {
    // console.log(`increment from child - ${by}`)
    this.setState (
      // define an arrow function to return what is in {} as an object
      (prevState) => {
        return {counter : prevState.counter + by}
      }
    ) ;
  }

  decrement = (by) => {
    // console.log("child decrement")
    this.setState (
      (prevState) => {
        return {counter : prevState.counter - by}
      }
    )
  }
}

class CounterButton extends Component {

  // add state to the component
  // 1. defin initial state in a constructor (set counter to 0)
  // 2. in the specific method, update the state 
  // constructor() { // move the state from CounterButton to Counter
  //   // !!!!! in javascript, only if you call super method, you can't use this keyword
  //   super() ;
  //   this.state = {
  //     // javascript object counter, initial value 0
  //     counter : 0,
  //     // secondCounter : 100
  //   }

  //   // bind the method increment to the class in order to use this keyword
  //   // this.increment = this.increment.bind(this); 
  //   // this.decrement = this.decrement.bind(this); 
  //   // but with arrow function on increment method, no need for binding
  // }

  // arrow function - like lambda in java
  
  render () {
    // define a variable, let is block scoped
    // const style = {fontSize: "50px", padding: "15px 30px"}
    return(
      // in JSX you can't use upper case
      // in regular html world to handle what happen when click the button, use onclick=some JavaScript method
      // but JSX is a bit different, anything related to JavaScript, put in {}, and only need the function name
      // in JSX you can define css style for each element, but normally we have css in separate file
      // in app.js, each counter has its own property, then here, use this.props.<property name>, display different value
      <div className="counter">
        {/* when you need to pass a param to an event listener, you need to use arrow method */}
        <button onClick={() => this.props.incrementMethod (this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod (this.props.by)}>-{this.props.by}</button>
        {/* <span className="count"
          style = {style}
        >{this.state.counter}</span>
        <span className='count'>{this.state.secondCounter}</span> */}
      </div>
    );
  }


  // move increment to Counter
  // change increment(){} to arrow function
  // increment = () => { // update - counter ++
  //   // console.log('increment');
  //   // for react function, in order to use this keyword, need to bind the method to the class
  //   // action taken in constructor
    
  //   //this.state.counter++; # this is wrong, in react, do not change state directly, use setState

  //   // passing an object to setState
  //   this.setState( 
  //      // when call this.setstate, it merge with current state
  //       (prevState) => {
  //         return {counter : prevState.counter + this.props.by}
  //       }
  //   ) ;
  //   // in child component, it needs to update parent's counter (call parent increment method)  as well
  //   // pass in the method as a props to the child, then child's function call that method
  //   this.props.incrementMethod(this.props.by) ;
  // }

  // decrement = () => {
  //   // console.log("child decrement")
  //   this.setState(
  //     (prevState) => {
  //       return {counter : prevState.counter - this.props.by}
  //     }
  //   ) ;
  //   this.props.decrementMethod(this.props.by) ;
  // }
}

// define default prop value
CounterButton.defaultProps = {
  by : 1
}

// property type check
CounterButton.propTypes = {
  by : PropTypes.number
}
 

export default Counter