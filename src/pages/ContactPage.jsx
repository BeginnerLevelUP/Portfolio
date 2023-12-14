import { useState } from "react";
function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const onBlur=()=>{

    }
    return (
        <>
            <h1>Contact Page</h1>
            <form>
                <div>
                <label htmlFor="name">Name : </label>
                <input id="name" type='text' placeholder="Please Enter Your Name" onChange={handleNameChange} value={name} required ></input>
                </div>

                <div>
                <label htmlFor="email">Email : </label> 
                    <input id="email"  type='email' placeholder="Please Enter Your Email Address" onChange={handleEmailChange} value={email} required></input>
                </div>

                <div>
                <label htmlFor="message">Message : </label>
                    <input id="message"  type='text' placeholder="Please Enter Your Desired Message" onChange={handleMessageChange} value={message} required></input>
                </div>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default ContactPage