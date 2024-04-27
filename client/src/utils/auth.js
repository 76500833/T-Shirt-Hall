import * as decode from 'jwt-decode';

class AuthService {
    getUser() {
        //get user data from json web token by decoding it
        return decode(this.getToken())
    }
    loggedIn() {
        //return true or false if token exists
        const token = this.getToken();
        return token ? true : false;
    }
    getToken() {
        //retrieves user token from local storage
        return localStorage.getItem('id_token')
    }
    login(idToken) {
        //saves user token in local storage and reloads the app for logged in status to take effect
        localStorage.setItem('id_token', idToken);
        window.location.assign('/')
    }
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload()
    }
}
export default new AuthService
