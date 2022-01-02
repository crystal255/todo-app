import React, {Component} from "react";
import {useNavigate} from 'react-router-dom'

class LoginComponent extends Component {
    // set state for the components, pass the props as an argument 
    constructor(props) {
        super(props)
        this.state = {
            username: "kola",
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
        if (this.state.username==="kola" && this.state.password==="dummy") {
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
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                {/*  create html elements input field */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate()
    return <LoginComponent {...props} navigate={navigate} />
}

export default WithNavigate