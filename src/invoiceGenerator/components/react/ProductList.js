
import { toast } from 'react-toastify';
import '../CSS/ProductList.css';
import { useContext } from 'react';
import { InvoiceGeneratorContext } from './Context.js';
import {useNavigate } from 'react-router-dom';
function Card() {
    const {removeItem} = useContext(InvoiceGeneratorContext);
    const {itemsTotal} = useContext(InvoiceGeneratorContext);
    const {allItems} = useContext(InvoiceGeneratorContext);
    const invoicepdfnavigator=useNavigate(

    );
    if (allItems.length === 0) {
        toast.info("The cart is empty.")
        return(
            <div className='emptylist'>   
            </div>
        );
    }
    return (
        <div className="mainItemData">
            <div class="priceHeading">
                <h2>Price List</h2>
            </div>
                <table className="carttable">
                    <tr className='tablerow'>
                        <th className="tableheading">Sr. No.</th>
                        <th className="tableheading">Product</th>
                        <th className="tableheading">Units</th>
                        <th className="tableheading">Price</th>
                        <th className="tableheading">Total</th>
                        <th className="tableheading">Remove</th>
                    </tr>
                    {allItems.map((item, index) => (
                        <tr className='tablerow' key={index}>
                            {Object.keys(item).map((key, i) => (
                                <td>{item[key]}</td>
                            ))}
                            <td ><button className='removeButton' id={item.id} onClick={(event) => (
                                removeItem(event.target.id)
                            )}>Remove</button></td>
                        </tr>
                    ))}
                    <div className='carttotalprice'>
                        <h3>Total Price - {itemsTotal}</h3>
                    </div>
                </table>
            <div className='cardButtons'>
                <div className="generateinvoicebutton">
                    <button className="generateinvoicebutton" onClick={() => {
                        invoicepdfnavigator("/customerinfo");
                    }}>Generate Invoice</button>
                </div>
            </div>
        </div>
    )

}
export default Card;