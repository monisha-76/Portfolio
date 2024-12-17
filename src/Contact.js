import React, { useState } from 'react'
import moni from "./moni.jpg"

const Contact = () => {

    const [message , setMessage] = useState('')

    const handleEmailSend = () => {
        const email = "monisham.it2023@citchennai.net";
        const subject = "Contact Message";
        const body = encodeURIComponent(message);  
        const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;  
        window.location.href = emailLink;
    }
    
    const handleWatsAppSend = ()=>{
        const phoneNumber = "6379941571"
        const whatsappLink = `https://wa.me/${phoneNumber}? text = ${encodeURIComponent(message)}`
        window.open(whatsappLink,'_blank')
    }

  return (
    <main>
  <img 
    src={moni}
    alt="Image"
    style={{
        width: "500px", 
        height: "600px", 
        alignItems : "center",
        float:"right",
        marginLeft: "20px", 
  }} 
/>
    <div style = {styles.contactContainer}>
        <h2>Contact Us</h2>
        <textarea
        value ={message}
        placeholder='Write your message here...'
        onChange={(e)=> setMessage(e.target.value)}
        style = {styles.textArea}
        />

        <div style = {styles.buttons}>
            <button onClick={handleEmailSend} style={styles.button}>
                Send Via Email
            </button>
            <button onClick={handleWatsAppSend} style ={styles.button}>
                Send Via WatsApp
            </button>
        </div>
    </div>
    </main>
  )
}

const styles = {
    contactContainer: {
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    textArea: {
      width: '100%',
      height: '150px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginBottom: '20px',
      boxSizing: 'border-box',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',  // Keeps buttons aligned properly
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };
  


export default Contact