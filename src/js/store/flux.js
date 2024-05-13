const getState = ({ getStore, getActions, setStore }) => {
    let agendaName = null; // Variable to store the agenda name

    return {
        store: {
            contacts: [],
        },
        actions: {
            createNewAgenda: () => {
                return fetch(`https://playground.4geeks.com/contact/agendas/Miguel123`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": 'Miguel123'
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to create agenda');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; // Rethrow the error to be caught by the caller
                });
            },
            createContact: (fullName, emailAddress, streetAddress, phoneNumber) => {
                // Ensure that a single agenda is created per session
                    fetch(`https://playground.4geeks.com/contact/agendas/Miguel123/contacts`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "name": fullName,
                            "email": emailAddress,
                            "agenda_slug": 'Miguel123',
                            "phone": phoneNumber,
                            "address": streetAddress,
                        })
                    })

                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to create contact');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    return data; // Return the response data
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; // Rethrow the error to be caught by the caller
                });
            },
            getContacts: () => {
                    // Fetch contacts using the agendaName
                fetch(`https://playground.4geeks.com/contact/agendas/Miguel123/contacts`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch contacts');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setStore({ contacts: data.contacts }); // Update the store with fetched contacts
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; // Rethrow the error to be caught by the caller
                });
            },
            editContact: (fullName, emailAddress, streetAddress, phoneNumber, id) => {
                return fetch(`https://playground.4geeks.com/contact/agendas/Miguel123/contacts/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": fullName,
                        "email": emailAddress,
                        "agenda_slug": 'Miguel123',
                        "phone": phoneNumber,
                        "address": streetAddress,
                    })
                }) 
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to edit contact');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    return data; // Return the response data
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; // Rethrow the error to be caught by the caller
                });
            },
            deleteContact: (id) => {
                // Implement deleteContact action if needed
                fetch(`https://playground.4geeks.com/contact/agendas/Miguel123/contacts/${id}`, {
                    method: 'DELETE',
                })
                .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete contacts');
                }
                else if (response.status === 204){
                    getActions().getContacts()
                }
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; 
                });
            },
        },
    };
};

export default getState;
