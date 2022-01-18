class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        // use session storage because data in session storage gets cleared when page session ends
        // local storage has no expiration time, so we do not use it.
        sessionStorage.setItem('authenticatedUser', username);
    }
    
    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }
}

export default new AuthenticationService()