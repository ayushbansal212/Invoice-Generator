
import React, { useContext } from 'react';
import '../CSS/Main.css';
import Navbar from './Navbar.js';
import { InvoiceGeneratorContext } from './Context.js';
function Main() {
    const{isdarktheme}=useContext(InvoiceGeneratorContext)
    return (
        <div className={isdarktheme?("dark"):("light")}>
            <div className='nav'>
            <Navbar className="nav"></Navbar> 
            </div>
        </div>
    )
}
export default Main;