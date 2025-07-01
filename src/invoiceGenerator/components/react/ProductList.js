
import { toast } from 'react-toastify';
import '../CSS/ProductList.css';
import { useContext } from 'react';
import { InvoiceGeneratorContext } from './Context.js';
import {useNavigate } from 'react-router-dom';
function Card() {
    console.log("Rendering ComponentName itemslist")
    const {removeItem} = useContext(InvoiceGeneratorContext);
    const {itemsTotal} = useContext(InvoiceGeneratorContext);
    const {allItems} = useContext(InvoiceGeneratorContext);
    const invoicepdfnavigator=useNavigate(

    );
    if (allItems.length == 0) {
        
        toast.info("No items added yet. Please add items to see them here.")
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
                        <th className="tableheading">Sr.</th>
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
                    <tr className='total tablerow' style={{ visibility: "visible" }}>
                        <td style={{ padding: "0px" }}> </td>
                        <td style={{ padding: "0px" }}></td>
                        <td></td>
                        <td id="totalprice">
                            Total Price
                        </td>
                        <td>
                            {itemsTotal}
                        </td>
                    </tr>
                </table>
            <div className='cardButtons'>
                <div className="generateinvoicebutton">
                    <button className="generateinvoicebutton" onClick={() => {
                        invoicepdfnavigator("/customerinfo");
                        toast.info("Functionality will be added soon.Thanks for keeping faith on us")
                    }}>Generate Invoice</button>
                </div>
            </div>
        </div>
    )

}
export default Card;