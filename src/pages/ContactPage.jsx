import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleBlur = () => {
        // Logic for onBlur events if needed
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Additional logic for form submission
    }

    return (
        <>
            <h1>Contact Page</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleBlur}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleMessage">Message</label>
                    <textarea
                        className="form-control"
                        id="exampleMessage"
                        placeholder="Enter message"
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={handleBlur}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ContactPage;
