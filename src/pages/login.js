import React, {useState} from 'react';
import EmployeeService from '../employeeServices'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaSave,FaUser, FaWindowClose } from 'react-icons/fa';
import userServices from '../userServices';

const initialState ={
            username: '',
            password: ''
};

const Login=()=>{
    const [state, setState]=useState(initialState);
    const{username,password}= state;


    
    const history=useHistory();
     const userLogin = async(data)=>{
        const res=await userServices.userLogin(data)
        if(res.data.status=='true'){
        toast.success(res.data.message)
        console.log(res.data.jwt_token)
        setTimeout(()=> history.push("/"),500)
        }
        else {
            console.log(res.data);
            toast.error(res.data.message);
        }
     };


    
    
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!username || !password ){
            toast.error("Please fill all values")
        }
        else{
            userLogin(state);
            
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
                                
                                        <label htmlFor="username"> Username: </label>
                                        <input type="text" placeholder="Username" name="username" className="form-control" 
                                           value={username} onChange={handleInputChange} required/>
  
                                  
                                    
                                        <label htmlFor="password"> Password: </label>
                                        <input type="password" placeholder="Password" name="password" className="form-control" 
                                             value={password} onChange={handleInputChange} required/>
                                    
                                    <div className="container">  
                                        <div className="col-md-12 text-center"> 
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