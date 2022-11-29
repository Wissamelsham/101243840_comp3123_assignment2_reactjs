import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaSave,FaUser, FaWindowClose } from 'react-icons/fa';
import userServices from '../userServices';


const initialState ={
            username: '',
            email: '',
            password: ''
    
};
const Signup=()=>{
    const [state, setState]=useState(initialState);
    const{username,email,password}= state;


    
    const history=useHistory();
     const userSignup = async(data)=>{
         const res=await userServices.userSignup(data);
       
        if(res.data._id){
           
        toast.success("User Created Succesfully");
        setTimeout(()=> history.push("/login"),500);
        }
        else {
           
            console.log(res.data);
            toast.error("Please provide valid Details");
        }
     };

    
    
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!username || !email || !password){
            toast.error("Please fill all values")
        }
        else{
            userSignup(state);
            
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
                                
                                        <label htmlFor="username"> Username: </label>
                                        <input type="text" placeholder="Username" name="username" className="form-control" 
                                           value={username} onChange={handleInputChange} required/>
  
                                    
                                        <label htmlFor="email"> Email: </label>
                                        <input type="text" placeholder="Email" name="email" className="form-control" 
                                             value={email} onChange={handleInputChange} required/>
                                  
                                    
                                        <label htmlFor="emailId"> Password: </label>
                                        <input type="password" placeholder="Password" name="password" className="form-control" 
                                             value={password} onChange={handleInputChange} required/>
                                    
                                    <div className="container">  
                                        <div className="col-md-12 text-center"> 
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