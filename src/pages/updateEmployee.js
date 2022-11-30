import React, { Component } from 'react'
import { FaSave, FaWindowClose } from 'react-icons/fa';
import { toast } from 'react-toastify';
import EmployeeService from '../employeeServices'

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.first_name,
                lastName: employee.last_name,
                emailId : employee.email
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {first_name: this.state.firstName, last_name: this.state.lastName, email: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
           
            if(res.data.message==='Updated Succesfully'){
                console.log(employee);
                toast.success("Record successfully Updated");
                this.props.history.push('/');
                 }
                 else {
                    
                     console.log(res.data);
                     toast.error("Please provide valid Email");
                 }
            
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                   <h2 className="text-center">Update Employee Details</h2>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">

                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button style={{margin:"10px"}} className="btn btn-success" onClick={this.updateEmployee}><FaSave/> Save</button>
                                        <button style={{margin:"10px",marginLeft: "10px"}} className="btn btn-danger" onClick={this.cancel.bind(this)}><FaWindowClose/> Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployee;