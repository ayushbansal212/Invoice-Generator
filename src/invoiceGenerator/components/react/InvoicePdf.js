import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useContext } from 'react';
import { InvoiceGeneratorContext } from './Context.js';
import Pdf from "./Pdf.js";
import { toast } from "react-toastify";
function InvoicePdf() {
    const { allItems } = useContext(InvoiceGeneratorContext);
    const { itemsTotal } = useContext(InvoiceGeneratorContext);
    const { customerName } = useContext(InvoiceGeneratorContext);
    const { customerContact } = useContext(InvoiceGeneratorContext);
    const { amountToBePaid } = useContext(InvoiceGeneratorContext);
    const { discountAmount } = useContext(InvoiceGeneratorContext);
    const { taxesAmount } = useContext(InvoiceGeneratorContext);
    const { invoiceId } = useContext(InvoiceGeneratorContext);
    console.log(customerName, customerContact);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "100%", height: "100vh" }}>
            <PDFViewer style={{ maxWidth:"90%",aspectRatio:"3/4", height: "95%", display: "flex", justifyContent: "center" }}>
                <Pdf invoiceId={invoiceId} taxesAmount={taxesAmount} discountAmount={discountAmount} itemsTotal={itemsTotal} allItems={allItems} customerName={customerName} customerContact={customerContact} amountToBePaid={amountToBePaid}></Pdf>
            </PDFViewer>
            <PDFDownloadLink document={<Pdf invoiceId={invoiceId} taxesAmount={taxesAmount} discountAmount={discountAmount} itemsTotal={itemsTotal} allItems={allItems} customerName={customerName} customerContact={customerContact} amountToBePaid={amountToBePaid}></Pdf>
            } fileName="invoice.pdf">
                <button style={{
                    border: "none",
                    textDecoration: "underline",
                    textAlign: "end",
                    cursor: "pointer",
                    borderRadius: "8px",
                    padding: 4
                }} onClick={()=>{
                    toast.info("Download is available on desktop browsers only")
                }}>
                    Download PDF
                </button>

            </PDFDownloadLink>
        </div>
    )
}
export default InvoicePdf;