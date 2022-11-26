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
const Login=()=>{
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
 
    const signup=()=>{
        history.push('/signup');
    }
    
    
    const handleInputChange = (e) =>{
        let { name, value  }= e.target;
    setState({ ...state, [name]:value});
    }

    return (
        <div>
            <br></br>
               <div className = "container">
               <h2 className="text-center">Login</h2>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
            
                            <div className = "card-body">
                                <form onSubmit={handleSubmit} >
                                
                                        <label htmlFor="firstName"> Username: </label>
                                        <input type="text" placeholder="Username" name="username" className="form-control" 
                                           value={firstName} onChange={handleInputChange} required/>
  
                                  
                                    
                                        <label htmlFor="emailId"> Password: </label>
                                        <input type="password" placeholder="Password" name="password" className="form-control" 
                                             value={emailId} onChange={handleInputChange} required/>
                                    
                                    <div class="container">  
                                        <div class="col-md-12 text-center"> 
                                        <button style={{margin:"10px",alignContent:'center'}} className="btn btn-primary justify-content-center" onClick={handleSubmit}><FaUser/> Login</button>
                                        <div>Don't have an account?<span  onClick={signup}style={{cursor:'pointer',color:'#3333ff',fontWeight:'500'}}> Signup </span></div>
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


export default Login;