
import { React, NavLink } from "react-router-dom";
import { useContext, useRef,useState } from 'react';
import '../CSS/ProductData.css';
import { InvoiceGeneratorContext } from "./Context.js";
function FormData() {
    console.log("Rendering ComponentName formdata")
    const firstInputRef = useRef(null);
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const {allItems} = useContext(InvoiceGeneratorContext);
    const {setAllItems} = useContext(InvoiceGeneratorContext);
    const{setItemsTotal} = useContext(InvoiceGeneratorContext);
    const{itemsTotal} = useContext(InvoiceGeneratorContext);
    function addItems(){
        const newItem = {
            id:allItems.length+1,
            name: item,
            quantity: quantity,
            price: price,
            totalPrice: totalPrice
        };
        setItemsTotal(prev=> prev + newItem.totalPrice);
        setAllItems(prevItems => [...prevItems, newItem]);
        return ;
    }
    return (
        <div className='itemsData'>
            <h1>Product Details</h1>
            <form action={() => {
                addItems();
                setTotalPrice(0);
                setPrice(0);
                setQuantity(0);
                if (firstInputRef.current) {
                    firstInputRef.current.focus();
                  }
            }} className='itemsdatainput'>
                <label for="item">Product </label>
                <input ref={firstInputRef} type="text" id="item" className='itemnameip' placeholder="Item Name" onInput={(event) => {
                    setItem(event.target.value);
                }} required />
                <label for="quantity">Units</label>
                <input type="number" name="quantity" className='itemnumberip' placeholder='Units' id="quantity" onInput={(event) => {
                    setQuantity(event.target.value);
                    setTotalPrice(event.target.value * price);
                }} required  />
                <label for="price">Price per unit</label>
                <input type="Number" name="price" className='itempriceip' placeholder="price" id="price" onInput={(event) => {
                    setPrice(event.target.value);
                    setTotalPrice(event.target.value * quantity);
                }} required />
                <label for="totalprice">Total Price</label>
                <input readOnly value={totalPrice} className='itemtoatalpriceop'   id="totalprice" />
                <div class="homebuttons">
                    <button className='additembutton'>Add to cart</button> 
                    <NavLink to="/addeditemslist"><button className="viewlist">Go To Cart</button></NavLink>
                </div>
            </form>
            
        </div>
    )
}


export default FormData;