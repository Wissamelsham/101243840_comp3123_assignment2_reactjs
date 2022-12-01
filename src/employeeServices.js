import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3000/api/emp/employees"; 
const EMPLOYEE_API_HEROKU_URL = "https://employee-management-app-001.herokuapp.com/api/emp/employees";
class EmployeeService {

    getEmployees(){
        let JWTToken = localStorage.getItem('jwt_token')
        return axios.get(EMPLOYEE_API_BASE_URL, { headers: {"Authorization" : `Bearer ${JWTToken}`} });
    }

    createEmployee(employee){
        let JWTToken = localStorage.getItem('jwt_token')
        return axios.post(EMPLOYEE_API_HEROKU_URL, employee,  { headers: {"Authorization" : `Bearer ${JWTToken}`} });
    }

    getEmployeeById(employeeId){
        let JWTToken = localStorage.getItem('jwt_token')
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId ,  { headers: {"Authorization" : `Bearer ${JWTToken}`} });
    }

    updateEmployee(employee, employeeId){
        let JWTToken = localStorage.getItem('jwt_token')
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee,  { headers: {"Authorization" : `Bearer ${JWTToken}`} });
    }

    deleteEmployee(employeeId){
        let JWTToken = localStorage.getItem('jwt_token')
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId,  { headers: {"Authorization" : `Bearer ${JWTToken}`} });
    }
}

export default new EmployeeService()