import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props){
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
            ]
        }
    }

    componentDidMount(){
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

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
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

export default ListTodosComponent
