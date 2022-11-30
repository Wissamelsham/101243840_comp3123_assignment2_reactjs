import React, {useState} from 'react';
import EmployeeService from '../employeeServices'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaSave, FaWindowClose } from 'react-icons/fa';


const initialState ={
            first_name: '',
            last_name: '',
            email: ''
    
};
const AddEmployee=()=>{
    const [state, setState]=useState(initialState);
    const{first_name,last_name,email}= state;


    
    const history=useHistory();
    const addEmployee = async(data)=>{
        console.log(data)
        const res=await EmployeeService.createEmployee(data);
       
        console.log(res.data._id);
        if(res.data._id){
           
       console.log(data);
        toast.success("Successfully add employee details");
        setTimeout(()=> history.push("/"),500);
        }
        else {
           
            console.log(res.data);
            toast.error("Please provide valid Email");
        }
    };

    
    
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!first_name || !email || !last_name){
            toast.error("Please fill all values")
        }
        else{
                addEmployee(state);
            
            //window.location.href="http://localhost:3000/employees";
        }
        
    };
 
    const cancel=()=>{
        history.push('/');
    }
    
    
    const handleInputChange = (e) =>{
        let { name, value  }= e.target;
    setState({ ...state, [name]:value});
    }

    return (
        <div>
            <br></br>
               <div className = "container">
               <h2 className="text-center">Add New Employee</h2>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
            
                            <div className = "card-body">
                                <form onSubmit={handleSubmit}>
                                
                                        <label htmlFor="first_name"> First Name: </label>
                                        <input type="text" placeholder="First Name" name="first_name" className="form-control" 
                                           value={first_name} onChange={handleInputChange} required/>
  
                                    
                                        <label htmlFor="last_name"> Last Name: </label>
                                        <input type="text" placeholder="Last Name" name="last_name" className="form-control" 
                                             value={last_name} onChange={handleInputChange} required/>
                                  
                                    
                                        <label htmlFor="email"> Email Id: </label>
                                        <input type="email" placeholder="Email Address" name="email" className="form-control" 
                                             value={email} onChange={handleInputChange} required/>
                                    
                                    
                                    <button style={{margin:"10px"}} className="btn btn-success" onClick={handleSubmit}><FaSave/> Save</button>
                                    <button style={{margin:"10px",marginLeft: "10px"}} className="btn btn-danger" onClick={()=>{cancel()}}><FaWindowClose/> Cancel</button>
                                    
                                     
                                    </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    );
}


export default AddEmployee;