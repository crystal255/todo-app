import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import LoginComponent from './LoginComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponent/>} />
                        <Route path="/welcome/:name" element={<WelcomeCompopnent/>} />
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                </Router>
                {/* <LoginComponent />
                <WelcomeCompopnent /> */}
            </div>
        )
    }
}

// alt fix to the lecture
function WelcomeCompopnent () {
    let {name} = useParams() ;
    return <div>Welcome { name }, to this Todo App!</div>
}

function ErrorComponent() {
    return <div>An Error Occurred. Please contact website support team. </div>
}

// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }     
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if (props.showSuccessMessage) {
//         return <div>Login Sucessful</div>
//     }
//     return null
// }

export default TodoApp