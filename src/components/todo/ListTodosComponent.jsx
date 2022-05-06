import React, {Component} from "react";
import {useNavigate} from 'react-router-dom'
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";


class ListTodosComponent extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            // best practice in React is: when you call an API, 
            // do not do the initial API calling directly in the constructor
            // otherwise, the state will not be initialized until the API call
            // is completed
            todos : 
            [
                // set the todo to an empty state initially

            // {id: 1, description: 'Learn React1', done: false, targetDate: new Date()},
            // {id: 2, description: 'Learn React2 flying high and play happy', done: false, targetDate: new Date()},
            // {id: 3, description: 'Learn React3', done: false, targetDate: new Date()},
            ] , message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentWillUnmount() {
        console.log('componentwillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // this is called before render is called, determine if change in prop / state should trigger a re-render
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        // if return false, the render will not be called to update the page
        // only if return true, render will be called
        return true
    }

    componentDidMount(){
        console.log('componentDidMount')
        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log(username)
        // TodoDataService.retrieveAllTodos(username)
        //     .then(
        //         response => {
        //             // console.log(response)
        //             this.setState({todos : response.data})
        //         }
        //     )
        this.refreshTodos()

    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(username)
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({todos : response.data})
                }
            )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
        .then (
            response => {
                this.setState({message: `Delete of todo ${id} successful`});
                this.refreshTodos();
            }
        )
    }

    updateTodoClicked(id) {
        console.log('update ' + id)
        // todo needs to route to /todo/${id}
        this.props.navigate(`/todos/${id}`)

        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log(id + " " + username)
        // TodoDataService.deleteTodo(username, id)
        // .then (
        //     response => {
        //         this.setState({message: `Delete of todo ${id} successful`});
        //         this.refreshTodos();
        //     }
        // )
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )                            
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function WithNavigation(props) {
    let navigate = useNavigate()
    return <ListTodosComponent {...props} navigate={navigate} />
}

export default WithNavigation
