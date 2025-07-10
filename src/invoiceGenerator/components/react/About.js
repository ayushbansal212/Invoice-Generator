

import '../CSS/About.css'
function About(){
   return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          lineHeight: "1.6",
        }}
        className='aboutmain'
      >
        <h1>
          Welcome to <span style={{ color: "rgb(240, 240, 18)", height:"100vh" }}>InvoicePro</span>, your
          smart and simple solution for generating professional invoices online!
        </h1><br/>
  
        <h2> Our Mission</h2><br/>
        <p>
          Our goal is to make invoicing fast, simple, and accessible for
          freelancers, small businesses, and startups. Whether you're billing a
          client or keeping track of transactions,{" "}
          <strong>InvoicePro</strong> helps you generate sleek, printable, and
          customizable invoices in seconds — no technical skills needed.
        </p>
      </div>
    );
  };

 
 export default About;