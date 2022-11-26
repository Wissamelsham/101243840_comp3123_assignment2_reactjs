import React, {useState} from 'react';
import EmployeeService from '../employeeServices'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaSave,FaUser, FaWindowClose } from 'react-icons/fa';


const initialState ={
            firstName: '',
            lastName: '',
            emailId: ''
    
};
const Signup=()=>{
    const [state, setState]=useState(initialState);
    const{firstName,lastName,emailId}= state;


    
    const history=useHistory();
    const addEmployee = async(data)=>{
        
        const res=await EmployeeService.createEmployee(data);
       
        console.log(res.data);
        if(res.data==='Employee added!'){
           
       console.log(data);
        toast.success("Successfully add employee details");
        setTimeout(()=> history.push("/employees"),500);
        }
        else {
           
            console.log(res.data);
            toast.error("Please provide valid Email");
        }
    };

    
    
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!firstName || !emailId || !lastName){
            toast.error("Please fill all values")
        }
        else{
                addEmployee(state);
            
            //window.location.href="http://localhost:3000/employees";
        }
        
    };
 
    const login=()=>{
        history.push('/login');
    }
    
    
    const handleInputChange = (e) =>{
        let { name, value  }= e.target;
    setState({ ...state, [name]:value});
    }

    return (
        <div>
            <br></br>
               <div className = "container">
               <h2 className="text-center">Signup</h2>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
            
                            <div className = "card-body">
                                <form onSubmit={handleSubmit} >
                                
                                        <label htmlFor="firstName"> Username: </label>
                                        <input type="text" placeholder="Username" name="username" className="form-control" 
                                           value={firstName} onChange={handleInputChange} required/>
  
                                    
                                        <label htmlFor="lastName"> Email: </label>
                                        <input type="text" placeholder="Email" name="email" className="form-control" 
                                             value={lastName} onChange={handleInputChange} required/>
                                  
                                    
                                        <label htmlFor="emailId"> Password: </label>
                                        <input type="password" placeholder="Password" name="password" className="form-control" 
                                             value={emailId} onChange={handleInputChange} required/>
                                    
                                    <div class="container">  
                                        <div class="col-md-12 text-center"> 
                                        <button style={{margin:"10px",alignContent:'center'}} className="btn btn-primary justify-content-center" onClick={handleSubmit}><FaUser/> Signup</button>
                                        <div>Do you have an account?<span  onClick={login} style={{cursor:'pointer',color:'#3333ff',fontWeight:'500'}}> Login </span></div>
                                        </div>
                                    </div>
                                       
                                    </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    );
}


export default Signup;