import React from 'react'
import emailjs from 'emailjs-com'
const Name = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm ()
  }
  return (
    
    <div className="container border"
    style={{marginTop:"50px",
     width:'50%',
     
}}>
  
      <h1 style={{marginTop:'25px'}}>Contact form</h1><wrapper>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.5998876579692!2d77.09415407474698!3d13.375137205903352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e0b800e5ab5%3A0x988f9f63aa841a23!2sShridevi%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1700877421612!5m2!1sen!2sin"
       width="100%"
        height="450" 
        style={{ border:"0"}}
         allowfullscreen=""
       loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe></wrapper>
      
      <form className="rows" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name"className="form-control"/>
        <label>Email</label>
        <input type="email" name="user_email" className="form-control"/>
        <label>Message</label>
        <textarea name="message" rows="4"className="form-control"/>
        <input type="submit" value="send" className="form-control btn btn-primary"
        style={{marginTop:"30px"}}/>
      </form>
    </div>
  )
}

export default Name