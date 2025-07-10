import { React,Route, Routes, NavLink,Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './Signup.js';
import '../CSS/Navbar.css';
import Login from './Login.js';
import { CiSun } from "react-icons/ci";
import { FaAffiliatetheme } from "react-icons/fa";
import logo from '../images/logo.webp';
import Card from './ProductList.js';   
import { useContext } from "react";
import { InvoiceGeneratorContext } from "./Context.js";
import InvoicePdf from "./InvoicePdf.js";
import CustomersInfo from "./CustomersInfo.js";
import Invoice from "./Invoice.js";
function Navbar({users}) {
    const{isloggedin,setLoggedIn}=useContext(InvoiceGeneratorContext);
    const{isdarktheme}=useContext(InvoiceGeneratorContext)
    const{setTheme}=useContext(InvoiceGeneratorContext);
    return(
    <div className="nav_main"> 
       <div className={isdarktheme?"navbard navbar":"navbarl navbar"} >
            <Link to={isloggedin?"/home":"/login"}><img src={logo} alt="" className="logo_image"/></Link>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            {
                isloggedin &&
                    (
                        <NavLink to="/login"><button className ="logoutbutton" onClick={()=>setLoggedIn(false)}>Log out</button></NavLink>
                    )
            }
            {
                !isloggedin && (
                    <NavLink to="/login">Log in</NavLink>
                )
            }
            <div className='theme'>
                <button className='themebutton' onClick={()=>{
                    setTheme(prev =>!prev)
                  
                }}>{isdarktheme?<FaAffiliatetheme size={28}/>:<CiSun size={30} />} <span>{isdarktheme?"DARK":"LIGHT"}</span> </button>
            </div>
       </div>
        <Routes>
            <Route index element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup users={users} />}></Route>
            <Route path="/saveitems" element={<h1>hello</h1>}></Route>
            <Route path="/addeditemslist" element={<Card/>} />
            <Route path="/invoicepdf" element={<InvoicePdf/>}></Route>
            <Route path="*" element={<h1>Page not found</h1>}></Route>
            <Route path="/customerinfo" element={<CustomersInfo></CustomersInfo>}></Route>
            <Route path="/invoice" element={<Invoice></Invoice>}></Route>
        </Routes>
    </div>
    )
}
export default Navbar;