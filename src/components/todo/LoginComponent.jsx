import React, {Component} from "react";
import {useNavigate} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
    // set state for the components, pass the props as an argument 
    constructor(props) {
        super(props)
        this.state = {
            username: "Kola",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]
                : event.target.value
            }
        )
    }

    // handlePasswordChange(event) {
    //     this.setState({
    //         password : event.target.value
    //     })
    // }

    loginClicked(){
        // test hard code: kola, dummy
        if (this.state.username==="Kola" && this.state.password==="dummy") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            // console.log("successful")
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage : true})
            // this.setState({hasLoginFailed : false})
        }
            
        else {
            // console.log("fail")
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
        // console.log(this.state)
    }

    render () {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {/*  create html elements input field */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate()
    return <LoginComponent {...props} navigate={navigate} />
}

export default WithNavigate