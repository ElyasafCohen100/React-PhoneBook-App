import React from "react";
import ContactsListComp from './components/ContactsListComp';
import "./App.css";

function App() {
    return (
        <div style={{
            backgroundColor: "#f0f0f0", minHeight: "100vh",
            display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <ContactsListComp />
        </div>
    );
}

export default App;
