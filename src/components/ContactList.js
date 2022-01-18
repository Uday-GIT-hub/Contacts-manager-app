import React,{useRef} from 'react'
import ContactCard from './ContactCard'
import {Link ,useNavigate} from 'react-router-dom'

function ContactList(props) {

    let navigate = useNavigate()
    const inputEl = useRef("")
   
    const renderContactList = 
        props.contacts.map(contact => {
            return(
               <ContactCard contact={contact} key={contact.id}/>
            )
        })
    
    const getSearchTerm =()=>{
        props.searchKeyword(inputEl.current.value)
    }
    return (
        <div className="ui celled list">
            <h2 style={{marginTop :"70px"}}>Contact list
            {/*<Link to="/add"><button className="ui violet button right floated">Add contact</button></Link>*/}
            <button className="ui violet button right floated" onClick={() => {navigate("/add")}}>Add contact</button>
            </h2>
            <div className="ui search">
                <div className="ui icon input" style={{width:"100%" , paddingRight:"40%",marginBottom:"10px",diplay:"block",alignItems:"center"}}>
                    <input type="text" placeholder="Seacrh Contacts" className="prompt" value={props.term} onChange={getSearchTerm} ref={inputEl}/>
                    <i className="search icon" style={{position:'relative',right:"50px",fontSize:"20px"}}></i>
                </div>
            </div>
            {renderContactList.length>0 ? renderContactList : <h3>No contacts availabe</h3>}
        </div>
    )
}

export default ContactList
