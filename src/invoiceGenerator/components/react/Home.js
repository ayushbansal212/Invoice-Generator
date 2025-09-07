
import { toast } from 'react-toastify'

import '../CSS/Home.css'
import FormData from './ProductData.js'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Home(){
 
    return (
        <div className="home">
            <FormData></FormData>
        </div>
    )
}
export default Home;