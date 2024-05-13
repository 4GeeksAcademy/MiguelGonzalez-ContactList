import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const EditForm = (props) => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        streetAddress: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(contact.fullName, contact.emailAddress, contact.phoneNumber, contact.streetAddress);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        aria-describedby="emailHelp"
                        value={contact.fullName}
                        onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={contact.emailAddress}
                        onChange={(e) => setContact({ ...contact, emailAddress: e.target.value })}
                        placeholder="example@email.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhoneNumber1" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPhoneNumber1"
                        value={contact.phoneNumber}
                        onChange={(e) => setContact({ ...contact, phoneNumber: e.target.value })}
                        placeholder="+34 123 45 67 89"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputStreetAddress1" className="form-label">Street Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputStreetAddress1"
                        value={contact.streetAddress}
                        onChange={(e) => setContact({ ...contact, streetAddress: e.target.value })}
                        placeholder="Av. Example, 123"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/">
                <button>Back home</button>
            </Link>
        </div>
    );
};
