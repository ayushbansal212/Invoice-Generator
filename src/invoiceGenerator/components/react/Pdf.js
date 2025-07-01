import { Document, Page, Text, Image, View, StyleSheet } from "@react-pdf/renderer";
import { Table, TR, TH, TD } from '@ag-media/react-pdf-table';
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 15,
    fontFamily: "Times-Roman",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "0.8rem",
    height:"17vh",
    marginBottom:"5vh"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color:"purple"
  },
  companyDetails: {
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "1vh",
    gap: "10px"
  },
  billerAddress: {
    lineHeight: "3vh",
  },
  centre: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  date: {
    lineHeight: "3vh",
  },

  td: {
    padding: 6,
    paddingBottom: "0px",
    fontSize: "14px",
    margin: "auto",
    fontWeight: 650,
    border: "0px solid black",
  },
  tableheader: {
    padding: 3,
    fontSize: "15px",
    backgroundColor: "lightgrey",
    border: "0px solid black",
  },
  tablerow: {
    textAlign: "center",
    borderRadius: "4px",
    border: "0px solid black"
  },
  amountdetails: {
    flexDirection: "column",
    margin: 10,
    gap: "10px",
    alignItems: "flex-end"
  },
  hr: {
    margin:"1vh",
    height: 1.5,
    backgroundColor: 'lightgrey',
    width: '90vw',
  },
  shorthr:{
    height: 1.5,
    backgroundColor: 'lightgrey',
    width: '20%',
  },
  boldhr:{
    height: 3,
    backgroundColor: 'purple',
    width: '90vw',
    margin:10

  },
  boldtext: {
    fontSize: "14px",
    fontWeight: "650",
  },
  lighttext: {
    fontSize: "14px",
    fontWeight: "450"

  },
  image:{
    width:"35vw",
    height:"100%",
    borderRadius:"8px",
    alignSelf:"center",
    padding:9
  }
});
function Pdf({ itemsTotal, allItems, customerName, customerContact, amountToBePaid, discountAmount, taxesAmount, invoiceId }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={{textAlign:"center",fontSize:"3.2vh",fontWeight:"700",marginBottom:"1.5vh",color:"purple"}}>INVOICE</Text>
        </View>
      
        <View style={styles.header}>
          <View>
          <Image src="https://ph-files.imgix.net/01244d87-4aae-43b3-859b-994bbd1246a2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=373&h=210&fit=max&frame=1" style={styles.image}/>
          </View>
          <View style={styles.companyDetails}>
            <Text style={styles.heading}>Services Now</Text>
            <Text>123,Luxmi Nagar</Text>
            <Text>Delhi</Text>
            <Text>India</Text>
            <Text>110076</Text>
          </View>
        </View>
        <View style={styles.centre}>
          <View style={styles.billerAddress}>
            <Text style={styles.heading}>Bill To:</Text>
            <Text style={styles.boldtext}>Name: <Text style={styles.lighttext}>{customerName}</Text></Text>
            <Text style={styles.boldtext}>Contact: <Text style={styles.lighttext}>{customerContact}</Text></Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.heading}>Invoice Details</Text>
            <Text style={styles.boldtext}>Invoice id: <Text style={styles.boldtext}>{invoiceId}</Text></Text>
            <Text style={styles.boldtext}>Issued: <Text style={styles.lighttext}>{new Date().toLocaleString()}</Text></Text>

          </View>
        </View>
        <View style={styles.boldhr}></View>
        <Table style={styles.table}>
          <TR style={[styles.tableborder, styles.tableheader, styles.tablerow]}>
            <TD style={[styles.heading, styles.tableheader]}>SR No.</TD>
            <TD style={[styles.heading, styles.tableheader]}>Product </TD>
            <TD style={[styles.heading, styles.tableheader]}>Units</TD>
            <TD style={[styles.heading, styles.tableheader]}>Price</TD>
            <TD style={[styles.heading, styles.tableheader]}>Total Price</TD>
          </TR>
          {allItems.map((item, index) => (
            <View>
              <TR key={index} style={[styles.row]}>
                {Object.keys(item).map((key, i) => (
                  <TD style={styles.td}>{item[key]}</TD>
                ))}
              </TR>
              <View style={styles.hr}></View>
            </View>
          ))}
        </Table>
        <View style={styles.boldhr}></View>
        <View style={styles.amountdetails}>
          <Text style={styles.boldtext}>Sub-Total- <Text style={styles.lighttext}>{itemsTotal.toFixed(2)}</Text></Text>
          <View style={styles.shorthr}></View>
          <Text style={styles.boldtext}>Taxes- <Text style={styles.lighttext}>{taxesAmount.toFixed(2)}</Text></Text>
          <View style={styles.shorthr}></View>
          <Text style={styles.boldtext}>Total Amount- <Text style={styles.lighttext}>{(itemsTotal+taxesAmount).toFixed(2)}</Text></Text>
          <View style={styles.shorthr}></View>

          <Text style={styles.boldtext}>Discount- <Text style={styles.lighttext}>{discountAmount.toFixed(2)}</Text></Text>
          <View style={[styles.boldhr,{width:"160",margin:0,height:"2px"}]}></View>
          <Text style={[styles.heading,{fontSize:"16px"}]}>Amount Payable- <Text>{amountToBePaid.toFixed(2)}</Text></Text>
          <View style={[styles.boldhr,{width:"160",margin:0,height:"2px"}]}></View>
        </View>
      </Page>
    </Document>
  );

}
export default Pdf;