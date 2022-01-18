import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute"
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from "./ListTodosComponent";


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                
                <Router>
                    <HeaderComponent/>
                    
                    <Routes>                      
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeCompopnent/></AuthenticatedRoute>} />
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent/></AuthenticatedRoute>} />  
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponent/>} />
                        <Route path="/logout" element={<LogoutComponent/>} />
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                    <FooterComponent/>
                </Router>
                {/* <LoginComponent />
                <WelcomeCompopnent /> */}
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2030 @ Kola</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div>Thank You for Using Our App!</div>
            </>
        )
    }
}


// alt fix to the lecture
function WelcomeCompopnent () {
    let {name} = useParams() ;
    // using <a> will make entire page refreshed. However, doing single page app, you don't want to refresh whole page. so use <Link>
    return (
        <>
            <h1>Welcome { name }!</h1> 
            <div className="container">You can manage your todos <Link to="/todos">here</Link>.</div>
        </>)
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