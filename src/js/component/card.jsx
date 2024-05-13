import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ full_name, email, phone, address, id }) => {
    const {store, actions} = useContext(Context)
    return(
        <div className="card">
            <div className="card-body">
                <p>{full_name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
                <Link to={{ pathname: "/editForm", state: { contact: { full_name, email, phone, address } } }}>
                    <button>Editar</button>
                </Link>
                <button onClick={() => actions.deleteContact(id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default Card;
