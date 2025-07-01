import { useContext, React } from 'react';
import { InvoiceGeneratorContext } from './Context.js';
import '../CSS/Invoice.css';
import { NavLink } from 'react-router-dom';
function Invoice() {
  const { allItems } = useContext(InvoiceGeneratorContext);
  const { itemsTotal } = useContext(InvoiceGeneratorContext);
  const { customerName } = useContext(InvoiceGeneratorContext);
  const { customerContact } = useContext(InvoiceGeneratorContext);
  const { amountToBePaid } = useContext(InvoiceGeneratorContext);
  const { discountAmount } = useContext(InvoiceGeneratorContext);
  const { taxesAmount } = useContext(InvoiceGeneratorContext);
  const { invoiceId } = useContext(InvoiceGeneratorContext);
  return (
    <div className="wrapper">
        
      <NavLink className="invoicepdflink" to="/invoicepdf">
        Download PDF
      </NavLink>
      <div className="contactmain">
        <div className="invoice-title">
          <h1 className="invoice-title">INVOICE</h1>
        </div>

        <div className="invoiceheader">
          <div className="logo-container">
            <img
              src="https://ph-files.imgix.net/01244d87-4aae-43b3-859b-994bbd1246a2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=373&h=210&fit=max&frame=1"
              alt="Company Logo"
              className="image"
            />
          </div>
          <div className="companydetails">
            <h2 className="invoiceheading">Services Now</h2>
            <p>123, Luxmi Nagar</p>
            <p>Delhi</p>
            <p>India</p>
            <p>110076</p>
          </div>
        </div>
        <div className="centre">
          <div className="billerAddress">
            <h3 className="heading">Bill To:</h3>
            <p className="boldtext">Name: <span className="lighttext">{customerName}</span></p>
            <p className="boldtext">Contact: <span className="lighttext">{customerContact}</span></p>
          </div>
          <div className="date">
            <h3 className="heading">Invoice Details</h3>
            <p className="boldtext">Invoice id: <span className="lighttext">{invoiceId}</span></p>
            <p className="boldtext">Issued: <span className="lighttext">{new Date().toLocaleString()}</span></p>
          </div>
        </div>

        <hr className="longboldhr"></hr>

        <table className="invoicetable">
          <thead className="tablehead">
            <tr className="tableheader tablerow">
              <th className="tableheader">SR No.</th>
              <th className="tableheader">Product</th>
              <th className="tableheader">Units</th>
              <th className="tableheader">Price</th>
              <th className="tableheader">Total Price</th>
            </tr>
          </thead>
          <tbody className="invoicetablerow">
            {allItems.map((item, index) => (
              <tr className="invoicetablerow" key={index}>
                {Object.keys(item).map((key, i) => (
                  <td className="tabledata" >{item[key]}</td>
                ))}

              </tr>
            ))}
          </tbody>

        </table>
        <hr className="longboldhr"></hr>

        <div className="amountdetails">
          <p className="boldtext">Sub-Total: <span className="lighttext">{(itemsTotal).toFixed(2)}</span></p>
          <hr className="shorthr"></hr>
          <p className="boldtext">Taxes: <span className="lighttext">{taxesAmount.toFixed(2)}</span></p>
          <hr className="shorthr"></hr>
          <p className="boldtext">Total Amount: <span className="lighttext">{(itemsTotal + taxesAmount).toFixed(2)}</span></p>
          <hr className="shorthr"></hr>
          <p className="boldtext">Discount: <span className="lighttext">{discountAmount.toFixed(2)}</span></p>
          <hr className="shortpurpleboldhr"></hr>
          <h3 className="amountpayable">Amount Payable: <span>{amountToBePaid.toFixed(2)}</span></h3>
          <hr className="shortpurpleboldhr"></hr>
        </div>
      </div>
    </div>
  );
}
export default Invoice;