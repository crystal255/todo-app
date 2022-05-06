import React, {Component} from "react";
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute"
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from "./ListTodosComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";


import withParams from "./withParams.jsx"
import WithNavigate from "./LoginComponent";
import WithNavigation from "./ListTodosComponent";


class TodoApp extends Component {
    render() {
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        // const ListTodosComponentWithNavigation = WithNavigation(ListTodosComponent);
        return (
            <div className="TodoApp">
                
                <Router>
                    <HeaderComponent/>
                    
                    <Routes>                      
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                        {/* <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponentWithNavigation/></AuthenticatedRoute>} />   */}
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent/></AuthenticatedRoute>} />  
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponent/>} />
                        <Route path="/logout" element={<LogoutComponent/>} />
                        {/* <Route path="/todos/:id" element={<AuthenticatedRoute><TodoComponent/></AuthenticatedRoute>} /> */}
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