import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddContact(props) {

    const navigate = useNavigate()
    const [contactList ,set_contact] = useState({name:"",email:""})
    const nameHandler =(e) =>
    {
        set_contact({name :e.target.value ,email :contactList.email})
        
    }
    const emailHandler =(e) =>
    {
        set_contact({name : contactList.name ,email :e.target.value})
    }
    const Add = (e) =>
    {
        e.preventDefault()
        if(contactList.name === ""){
            alert("Enter your name!")
            return
        }
        else if(contactList.email === "")
        {
            alert("Enter your Email!")
            return
        }
        else{
            props.addContactHandler(contactList)
            set_contact({name:"",email:""})
            navigate('/')
        }
    }
    return (
    <div className="ui main" style={{marginTop :"80px"}}>
        <h2 className="heading">Add Contact</h2>
        <form className='ui form' onSubmit={Add}>
            <div className="field">  
                <label>Name</label>
                <input type="text" name="Name" placeholder="Name" onChange={nameHandler} value={contactList.name}></input>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="email" name="Email" placeholder="Email" onChange={emailHandler} value ={contactList.email}></input>
            </div>
            <button className="ui button green">Add</button>
        </form>
    </div>)
}

export default AddContact
