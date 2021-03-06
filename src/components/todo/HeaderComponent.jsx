import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {Link, useNavigate} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/crystal255" className="navbar-brand">Kola</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/Kola">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            
        )
    }
}

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();

        return (
            <Component
                history={history}
                {...props}
            />
        )
    }
    return Wrapper;
}

export default withRouter(HeaderComponent)