import React from 'react'
import './Contact.css'
import letter from '../../assets/letter.png'
import email from '../../assets/Email.png'
import call from '../../assets/call.png'
import location from '../../assets/Location.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "93dadbf2-d5bf-4df0-a116-95a5814a844d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={letter} alt="" /></h3>
        <p>Please use the contact form to get in touch, or see our details below for our details. We value your questions, comments, and recommendations as we work to 
            give our university community outstanding service.</p>
      <ul>
        <li><img src={email} alt="" />contacthasindu@gmail.com </li>
        <li><img src={call} alt="" />+94-71-703-3907 </li>
        <li><img src={location} alt="" />Near the School,Thalawa,Kariyamadiththa </li>
      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Numnber </label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your Messages here</label>
            <textarea name="message"  rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn-1'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
