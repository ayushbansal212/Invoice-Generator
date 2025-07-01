import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../CSS/signup.css'
import { toast } from 'react-toastify';
import invoiceImage from '../images/invoice.webp';
function Signup() {
    const navigate = useNavigate();
    console.log("Rendering ComponentName signup")
    const [newAccountDetails, setNewAccountDetails] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    function handleChange(event) {
        setNewAccountDetails(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const stringOfSymbols="@#$&";
    function uchar(){
        return String.fromCharCode(Math.floor(Math.random()*(80-65))+65);
    }
    function lchar(){
        return String.fromCharCode(Math.floor(Math.random()*(122-97))+97);
    }
    function num(){
        return String.fromCharCode(Math.floor(Math.random()*(57-48))+48);
    }
    function symbols (){
        return stringOfSymbols.charAt(Math.floor(Math.random()*(stringOfSymbols.length)));
    }

    function generatePassword(){
        let arr=[uchar,lchar,symbols,num];
        let newGeneratedPassword="";
        for(let i=0;i<10;i++){
            let idx = Math.floor(Math.random() * arr.length);
            newGeneratedPassword+=arr[idx]();
        }
        setNewAccountDetails(prev => {
            return {
                ...prev,
                password: newGeneratedPassword
            }
        })
    }
    function checkFormValidity() {
        if (newAccountDetails.password !== newAccountDetails.confirmPassword) {
            toast.error("Password & Confirm Pasword must be same");
            
        }
        else {
            toast.success("Account created Successfully");
            navigate("/login");
        }
    }
    return (
        <div className='ssignupform'>
            
            <div className="sleft">
                <div className="sheading">
                    <h2 >
                        Today the millions of people use Invoice Generator. <br />
                    </h2><br></br>
                </div>
                <div class="sdescription">
                    <p>
                        Where you are???
                        Create account and get started...
                    </p><br></br>

                </div>
                <div >
                    <form className="ssignupformdetails" action={()=>
                        checkFormValidity()
                    }>
                        <div className="snamel">
                            <label htmlFor="sfirstName">First Name <sup>*</sup></label>
                            <label htmlFor="slastName">Last Name<sup>*</sup></label>
                        </div>
                        <div className="snameipb">
                            <input type="text" className="snameip" placeholder="Enter your first name*" name="firstName" id="firstName" onChange={handleChange} required />
                            <input type="text" className="snameip" placeholder="Enter your last name*" name="lastName" id="lastName" onChange={handleChange} required />
                        </div>
                        <label htmlFor="email" className="semaill">Email Address<sup>*</sup></label>
                        <input type="email" placeholder="Enter your email *" className="semailip" name="email" id="email" required />
                        <div className="spasswordl">
                            <label htmlFor="password">Password<sup>*</sup></label>
                            <label htmlFor="confirmPassword">Confirm Password<sup>*</sup></label>
                        </div>
                        <div className="spasswordipb">
                            <input type="text" value={newAccountDetails.password} className="spasswordip" placeholder="Enter password*" id="password" name="password" onChange={handleChange} required />
                            <input type="password" className="spasswordip" placeholder="Confirm password*" id="confirmPassword" name="confirmPassword" onChange={handleChange} required />
                        </div>
                        <span className="autopasswordbutton"><button className="autopasswordbutton" type='button' onClick={()=>{
                            toast.success("PASSWORD created successfully");
                            generatePassword();
                        }}>Auto Password</button></span>
                        <button type="submit" className="ssubmit">Create Account</button>
                    </form>
                    <div className="or">
                        <span >OR</span>
                    </div>
                    <div>
                        <button className="sgooglesignin">
                            Sign up With Google
                        </button>
                    </div>
                    <div className="alreadysignedin">
                        
                        Already have an account? <NavLink className="alreadysignedin" to="/login">Log In</NavLink>
                        
                    </div>

                </div>
            </div>

            <div className="sright">
                <img src={invoiceImage} alt="image" />
            </div>

        </div>
    )
}
export default Signup;