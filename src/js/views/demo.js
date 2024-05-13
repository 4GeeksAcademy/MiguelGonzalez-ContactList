import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullname, setFullName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [streetAddress, setStreetAddress] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(fullname, emailAddress, phoneNumber, streetAddress);
		setFullName("");
        setEmailAddress("");
        setPhoneNumber("");
        setStreetAddress("");
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
					value={fullname}
					onChange={e => setFullName(e.target.value)}
					placeholder="Enter your full name"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
					<input 
					type="email" 
					className="form-control" 
					id="exampleInputEmail1"
					value={emailAddress}
					onChange={e => setEmailAddress(e.target.value)}
					placeholder="example@email.com"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputStreetAddress1" className="form-label">Street Address</label>
					<input 
					type="text" 
					className="form-control" 
					id="exampleInputPhoneNumber1"
					value={phoneNumber}
					onChange={e => setPhoneNumber(e.target.value)}
					placeholder="Av. Example, 123"
					/>
				</div>				
				<div className="mb-3">
					<label htmlFor="exampleInputPhoneNumber1" className="form-label">Phone Number</label>
					<input 
					type="text" 
					className="form-control" 
					id="exampleInputAddress1"
					value={streetAddress}
					onChange={e => setStreetAddress(e.target.value)}
					placeholder="+34 123 45 67 89"
					/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<button onClick={() => console.log(fullname)}>Mostrar Datos</button>
			<Link to="/">
				<button >Back home</button>
			</Link>
		</div>
	);
};
