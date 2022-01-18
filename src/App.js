import React,{useState ,useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom'

import Header from './components/Header'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'
import ContactDetails from './components/ContactDetails'
import DeleteContact from './components/DeleteContact'
import EditContact from './components/EditContact'
function App() {

  const LOCAL_STORAGE_KEY ="contacts"
  const [contacts,setContacts] = useState([])
  const [searchTerm,setSeacrhTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const axios = require('axios').default;

  const searchHandler = (searchTerm) =>{
    setSeacrhTerm(searchTerm)
    if(searchTerm !== "")
    {
      const newContactList = contacts.filter((contact) =>{
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    }
    else{
      setSearchResults(contacts)
    }
  }
  //Retrive contacts 
  const retriveContacts = async () => {
    const response = await axios.get(" http://localhost:3006/contacts")
    return response.data
  }
  const addContactHandler = async (contact) =>{
    console.log(contact)
    const request = {
      id:Math.random()*1000,
      ...contact,
    }

    const response = await axios.post("http://localhost:3006/contacts",request)
    setContacts([...contacts,response.data])
  }

  const updateContactHandler = async (contact) => {
    const response = await axios.put(`http://localhost:3006/contacts/${contact.id}`,contact)
    const {id,name,email} =response.data
    setContacts(contacts.map(Contact => {
      return Contact.id === id ? {...response.data}:contact
    }))
    window.location.reload()
  }
  
  const removeContactHandler = async(id) => {
    await axios.delete(`http://localhost:3006/contacts/${id}`)
    const newContacts = contacts.filter(contact => {
      return contact.id !== id
    })
    setContacts(newContacts)
  }
  
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if(retriveContacts) setContacts(retriveContacts)
    const getAllContacts = async () => {
      const allContacts = await retriveContacts()
      if(allContacts) setContacts(allContacts)
    }
    getAllContacts()
  },[])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])


  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<ContactList term={searchTerm} searchKeyword={searchHandler} contacts={searchTerm.length < 1 ? contacts:searchResults} />}/>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          <Route path="/contact/:id" element={<ContactDetails/>}/>
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler}/>}/>
          <Route path="/delete/:id" element={<DeleteContact getContactId = {removeContactHandler}/>}/>
        </Routes>
      
       {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} g/>*/}
      </Router>
      
    </div>
  );
}

export default App;
