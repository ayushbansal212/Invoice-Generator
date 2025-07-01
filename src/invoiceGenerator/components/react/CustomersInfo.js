
import { useContext} from 'react';
import '../CSS/CustomersInfo.css';
import{ InvoiceGeneratorContext } from './Context.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function CustomersInfo() {
    const { setCustomerName } = useContext(InvoiceGeneratorContext)
    const { setCustomerContact } = useContext(InvoiceGeneratorContext);
    const{itemsTotal}=useContext(InvoiceGeneratorContext);
    const{setAmountToBePaid}=useContext(InvoiceGeneratorContext)
    const{amountToBePaid}=useContext(InvoiceGeneratorContext)
    const{setInvoiceId}=useContext(InvoiceGeneratorContext)
    const{setDiscount}=useContext(InvoiceGeneratorContext)
    const{setTaxes}=useContext(InvoiceGeneratorContext);
    const {discountref}=useContext(InvoiceGeneratorContext);
    const {taxref}=useContext(InvoiceGeneratorContext);
    const{handleAmountToBePaid}=useContext(InvoiceGeneratorContext)
    const invoicenavigator=useNavigate();
    function uchar(){
        return String.fromCharCode(Math.floor(Math.random()*(80-65))+65);
    }
    function lchar(){
        return String.fromCharCode(Math.floor(Math.random()*(122-97))+97);
    }
    function num(){
        return String.fromCharCode(Math.floor(Math.random()*(57-48))+48);
    }
    
    function generateInvoiceId() {
        let arr=[uchar,lchar,num];
        let newinvoiceId="#OD";
        for(let i=0;i<10;i++){
            let idx = Math.floor(Math.random() * arr.length);
            newinvoiceId+=arr[idx]();
        }
        setInvoiceId(newinvoiceId);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setAmountToBePaid(amountToBePaid);
        generateInvoiceId();
        toast.info("PDF download is only available on desktop browsers")
        setTimeout(() => invoicenavigator("/invoice"), 0);
      }

    return (
        <div className="customerwrapper">
            <div className='main'>
                <h2>Customer's Deatails</h2>
                <form onSubmit={handleSubmit} className='customerdetails'>
                    <label className="customername" for="customerName">Name</label>
                    <input className="customernameip" type="text" id="customerName" name="customerName" onChange={(event) => {
                        setCustomerName(event.target.value);

                    }  } required />
                    <label for="customercontact" className='customerContact'>Contact</label>
                    <input  required className='customercontactip' type="tel" pattern='[0-9]{10}' title='Enter Valid 10 digit Number' name="customerContact" is="customerContact" onChange={(event) => {
                        setCustomerContact(event.target.value)
                    }} />
                    <br/>
                    <hr/>
                    <h2>Bill Details</h2>
                    <label for="subTotal" className='subTotal'>Sub Total</label>
                    <input readOnly className='subTotal' value={itemsTotal} />
                    <label className="taxes" for="Taxes">Taxes(if any)</label>
                    <input ref={taxref} className="taxesip" type="number"  max={100} defaultValue={0} onChange={(event)=>{
                        setTaxes(event.target.value);
                        if(event.target.value>30){
                            toast.info("Tax is very high. Please check it once");
                        }
                        handleAmountToBePaid();

                    }}/>
                    <label className="disocunt" for="Taxes">Discount(in %)</label>
                    <input ref={discountref} type="number" className='discountip'  max={100} defaultValue={0} onChange={(event)=>{
                        setDiscount(event.target.value);
                        if(event.target.value>100){
                            toast.info("Discount cant be more than 100%");
                        }
                        handleAmountToBePaid();
                    }}/>
                    <label className='amounttobepaid'>Amount to be paid</label>
                    <input  className='amounttobepaid' readOnly value={amountToBePaid} />
                    <button className='proceedfromcustomerinfo'>Proceed</button>
                </form>
            </div>
        </div>
    )

}
export default CustomersInfo;