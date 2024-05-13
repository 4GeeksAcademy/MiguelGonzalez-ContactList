import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.createNewAgenda();
        actions.getContacts();
    }, []);

    // Check if loading
    if (store.loading) {
        return <div>Loading...</div>;
    }

    // Check for errors
    if (store.error) {
        return <div>Error: {store.error.message}</div>;
    }

    // Check if store.contacts is an array before mapping over it
    if (!Array.isArray(store.contacts) || store.contacts.length === 0) {
        return <div>No contacts available</div>;
    }

    return (
        <div className="text-center mt-5">
            {store.contacts.map((item, index) => {
                return (
                    <Card 
                        full_name={item.full_name} // Adjust prop names according to API response
                        email={item.email}
                        phone={item.phone}
                        address={item.address}
                        id={item.id}
                        key={index} />
                );
            })}
        </div>
    );
};
