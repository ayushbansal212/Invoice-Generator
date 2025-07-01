
import { createContext, use, useState,useEffect } from 'react';
export const InvoiceGeneratorContext = createContext();

export default function InvoiceGeneratorContextProvider({children}) {
    const [isloggedin,setLoggedIn]=useState(false);
    const [userProfileVisibilty,setUserProfileVisibilty]=useState(false);
    const [allItems,setAllItems]=useState([]);
    const[customerName,setCustomerName]=useState("");
    const [itemsTotal, setItemsTotal] = useState(0);
    const[invoiceId,setInvoiceId]=useState();
    const[customerContact,setCustomerContact]=useState("");
    const[isdarktheme,setTheme]=useState(true);
    const[amountToBePaid,setAmountToBePaid]=useState();
    const[discount,setDiscount]=useState(0);
    const[taxes,setTaxes]=useState(0);
    const[taxesAmount,setTaxesAmount]=useState(0);
    const[discountAmount,setDiscountAmount]=useState(0);
    function removeItem(id) {
        const newItems=allItems.filter((item)=>item.id!=id);
        let newTotalPrice = 0;
        newItems.forEach((item,index) => {
            newTotalPrice += item.totalPrice;
            item.id = index+1;
        });
        setItemsTotal(newTotalPrice);
        setAllItems(newItems);
    }
    function handleAmountToBePaid(){

    }
    useEffect(()=>{
        let tax=taxes;
        let taxAmount=(tax*itemsTotal)/100;
        setTaxesAmount(taxAmount);
        let disc=discount;
        if(disc>100){
            
            return;
        }

        let discAmount=(itemsTotal+taxAmount)*disc/100;
        let newAmount=itemsTotal+taxAmount-discAmount;
        setDiscountAmount(discAmount);
        console.log(disc,discAmount,tax,taxAmount);
        setAmountToBePaid(newAmount);
    },[taxes,discount,itemsTotal]);

    const value ={
        customerContact:customerContact,
        setCustomerContact:setCustomerContact,
        isdarktheme:isdarktheme,
        setTheme:setTheme,
        itemsTotal:itemsTotal,
        setItemsTotal:setItemsTotal,
        removeItem:removeItem,
        allItems:allItems,
        customerName:customerName,
        setCustomerName:setCustomerName,
        setAllItems:setAllItems,
        isloggedin:isloggedin,
        setLoggedIn:setLoggedIn,
        amountToBePaid:amountToBePaid,
        setAmountToBePaid:setAmountToBePaid,
        userProfileVisibilty:userProfileVisibilty,
        setDiscount:setDiscount,
        setTaxes:setTaxes,
        discount:discount,
        taxes:taxes,
        taxesAmount:taxesAmount,
        discountAmount:discountAmount,
        invoiceId:invoiceId,
        setInvoiceId:setInvoiceId,
        handleAmountToBePaid:handleAmountToBePaid,
        setUserProfileVisibilty:setUserProfileVisibilty}
    return (<InvoiceGeneratorContext.Provider value={value}>
        {children}
     

    </InvoiceGeneratorContext.Provider>)
}
