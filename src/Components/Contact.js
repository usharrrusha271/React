/*import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2>Feel free to dial 8888888888, if you require on-call assistance. How can Justdial help you find the best social media marketing agencies
            
        </h2>
      
    </div>
  )
}

export default Contact*/
import React from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm ()
  }
  return (
    
    <div className="container border"
    style={{marginTop:"50px",
     width:'50%',
     
}}>
  <br/><br/><br/>
  
      <h2 style={{marginTop:'25px'}}>Contact us - SIET</h2><wrapper>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.5998876579692!2d77.09415407474698!3d13.375137205903352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e0b800e5ab5%3A0x988f9f63aa841a23!2sShridevi%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1700877421612!5m2!1sen!2sin"
       width="100%"
        height="450" 
        style={{ border:"0"}}
         allowfullscreen=""
       loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe></wrapper><br/><br/>
      
      <p style={{backgroundColor:'blueviolet'}}><p style={{color:'white'}}> Shridevi Institute of Engineering and Technology<br/><br/>
      Address:<br/>
Sira Road, Tumakuru - 572 106. Karnataka.<br/><br/>

 Contact:<br/>
 +91-816-2212 629 (Office) | +91-816-2212 628 (Fax) | +91-7259011111 (Admissions)<br/><br/>
 Email:<br/>
info@shrideviengineering.org
</p>
      </p>
    </div>
    
  )
}

export default Contact
