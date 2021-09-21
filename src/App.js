import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function ContactList() {
  const [contacts, setContact] = useState(contactsData.slice(0, 5));
  const sortArr = [...contacts];
  function RandomContact() {
    let random = Math.floor(Math.random() * contactsData.length);
    setContact([...contacts, contactsData[random]]);
  }
  function sortByName() {
    sortArr.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setContact(sortArr);
  }
  function sortByPopularity() {
    sortArr.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContact(sortArr);
  }
  function deleteContact(id) {
    let newArr = sortArr.filter(function (element) {
      return element.id !== id;
    });
    setContact(newArr);
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={RandomContact}>Add random contact</button>
      <button onClick={sortByName}>sort name</button>
      <button onClick={sortByPopularity}>sort popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="imagenes"
                  src={contact.pictureUrl}
                  alt="imagen"
                ></img>
              </td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              <td>{contact.wonOscar ? "🏆" : ""} </td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
              <td>
                <button
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                  id={contact.id}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
