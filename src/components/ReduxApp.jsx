// =========== Main App Component =========== //

import React, { useState } from 'react';
import ContactsListComp from './ContactsListComp';
import ContactDetailsComp from './ContactDetailsComp';
import AddNewContactComp from './AddNewContactComp';

export default function ReduxApp() {

    const [selectedContact, setSelectedContact] = useState(null);
    const [isAdding, setIsAdding] = useState(false);


    // Function to start adding a new contact //
    const handleAddContact = (selectedContact) => {
        setIsAdding(true);
        if (selectedContact.firstName.trim() &&
            selectedContact.lastName.trim() &&
            selectedContact.phoneNunber.trim()) {
            setSelectedContact([...contactsList, selectedContact]);
        }
        else {
            console.log("Please fill all fields!");
        }
    }

    return (

        <div>
            {!selectedContact && !isAdding ? (
                <ContactsListComp
                    onSelectContact={setSelectedContact}
                    onAddContact={handleAddContact} />

            ) : isAdding ? (

                <AddNewContactComp
                    onBack={() => setIsAdding(false)} />
            ) : (

                <ContactDetailsComp
                    contact={selectedContact}
                    onBack={() => setSelectedContact(null)} />
            )}

        </div>
    );
};
