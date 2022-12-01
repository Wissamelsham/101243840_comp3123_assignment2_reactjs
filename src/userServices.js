import axios from 'axios';

const USER_SIGNUP_API_BASE_URL = "http://localhost:3000/api/user/signup";
const USER_SIGNUP_API_HEROKU_URL = "https://employee-management-app-001.herokuapp.com/api/user/signup";
const USER_LOGIN_API_BASE_URL = "http://localhost:3000/api/user/login";
const USER_LOGIN_API_HEROKU_URL =  "https://employee-management-app-001.herokuapp.com/api/user/login";
class UserService {

    userSignup(user){
        return axios.post(USER_SIGNUP_API_HEROKU_URL, user);
    }

    userLogin(user){
        return axios.post(USER_LOGIN_API_BASE_URL, user);
    }

}

export default new UserService()