
import { useContext, useState } from 'react';
import '../CSS/Login.css';
import invoiceImage from '../images/invoice.webp';
import {useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { InvoiceGeneratorContext } from "./Context.js";
function Login() {
    console.log("Rendering ComponentName login")
    const {setLoggedIn } = useContext(InvoiceGeneratorContext)
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [passwordvisibility, setPasswordVisibility] = useState(false);
    const dashboardNavigation = useNavigate();
    function handleChange(event) {
        let { name, value } = event.target;
        setLoginDetails(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }
    return (
       <div className="loginwrapper">
         <div className="login_main">
            <div className="login_heading">
                <h2 className="loginHeading">LOG IN</h2>
            </div>
            <div className="left" >
                <div className="heading">
                    <h1 classname="loginHeading" >Welcome Back</h1>
                    <h3><p>Generate Invoice Effortlessly...</p></h3><br />
                </div>
                <div className="description">

                    <p>Want to genertate invoice?? List is large?? <br />
                        Sign in to your account and get started with Invoice Generator.
                    </p><br />
                </div>
                <div className="loginform">
                    <form action={() => {
                        toast.success("Successfully logged in");
                        setLoggedIn(true);
                        dashboardNavigation("/home");
                    }} className='account_login'>
                        <label htmlFor="email" className='emaill'>Email Address</label>
                        <input type="email" className='emailip' placeholder="Enter your email" value={loginDetails.email} name="email" id="email" required onChange={handleChange} />
                        <label className="passwordl" htmlFor="password" >Password</label>
                        <div className="passwordInput">
                            <input className="passwordip" type={passwordvisibility ? "text" : "password"} placeholder="Enter password" id="password" value={loginDetails.password} name="password" required onChange={handleChange} />
                            <button type='button' className='passwordshowbutton' onClick={() => {
                                setPasswordVisibility(!passwordvisibility);
                            }}>
                                {passwordvisibility ? "Hide" : "Show"}
                            </button>
                        </div>
                        <span className="forgotpasswordbutton"><button className="forgotpasswordbutton" type='button' onClick={() => {
                            toast.info("Feature will be available soon");
                        }}>Forgot Password</button></span>
                        <button className="signin" type="submit" >Sign in</button>
                    </form>
                </div>
                <div className="or">
                    <span >OR</span>
                </div>
                <div>
                    <button className="googlesignin">
                        Sign in With Google
                    </button>
                </div>
                <div className="createNewAccount">
                    <button className="createNewAccount" onClick={() => {
                        dashboardNavigation("/signup")
                    }}>
                        Create New Account
                    </button>
                </div>
            </div>
            <div className="right">
                <img src={invoiceImage} alt="image" />
            </div>
        </div>
       </div>
    )
}
export default Login;