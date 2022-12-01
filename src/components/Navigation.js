import {React,useEffect, useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';
import { Link, useNavigate,useHistory } from 'react-router-dom'
const  NavigationBar =()=> {

    const history=useHistory();
    const [isShowNavBar,setIsShowNavBar] = useState(false);
    let JWTToken = localStorage.getItem('jwt_token');
    useEffect(()=>{
        setIsShowNavBar(JWTToken ? true : false);
    },[JWTToken])

    const logout=()=>{
        localStorage.clear()
        history.push('/login')
       
    }
    const showlist=()=>{
        history.push('/')
    }
    const addemp=()=>{
        history.push('/addEmployee')
    }

    console.log(JWTToken)
        return (
        
               <Navbar collapseOnSelect fixed='top' expand='lg' bg='black' varient='black' className='navbar-dark'>
            <Container>
            <Navbar.Brand>Employee Management</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="navbar-nav mx-auto" >
                        <Nav.Link  id="navItem" onClick={showlist}>Employee List</Nav.Link>
                        <Nav.Link  id="navItem" onClick={addemp}>Add Employee</Nav.Link>
                        <Nav.Link id="navItem"  onClick={logout} >Logout</Nav.Link>
                    </Nav>
             
                </Navbar.Collapse>
            }
            </Container>

        </Navbar>
        )
    
}
// const [activeTab,setActiveTab]= useState("employees");
//         return(
//             <div className="header">
//                 <p className="logo">Employee Management</p>
//                 <div className="header-right">
//                     <Link to="/">
//                         <p
//                         className={`${activeTab === "EmployeeList"? "active":""}`}
//                         onClick={()=> setActiveTab("EmployeeList")}>
//                             Home
//                         </p>
//                     </Link>
//                     <Link to="/viewEmployee/:id">
//                         <p
//                         className={`${activeTab === "ViewEmployees"? "active":""}`}
//                         onClick={()=> setActiveTab("ViewEmployees")}>
//                             ViewEmployees
//                         </p>
//                     </Link>
//                 </div>
                
//             </div>
//         )

export default NavigationBar;