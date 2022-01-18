import React,{useState} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

function EditContact(props) {

    const navigate = useNavigate()
    const location = useLocation()
    const {id,name , email} = location.state

    const [contactList ,set_contact] = useState({id: id,name:name,email:email})
    const nameHandler =(e) =>
    {
        set_contact({id:contactList.id,name :e.target.value ,email :contactList.email})
        
    }
    const emailHandler =(e) =>
    {
        set_contact({id:contactList.id,name : contactList.name ,email :e.target.value})
    }
    const update = (e) =>
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
            props.updateContactHandler(contactList)
            set_contact({name:"",email:""})
            navigate('/')
        }
    }
    return (
    <div className="ui main" style={{marginTop :"80px"}}>
        <h2 className="heading">Edit Contact</h2>
        <form className='ui form' onSubmit={update}>
            <div className="field">  
                <label>Name</label>
                <input type="text" name="Name" placeholder="Name" onChange={nameHandler} value={contactList.name}></input>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="email" name="Email" placeholder="Email" onChange={emailHandler} value ={contactList.email}></input>
            </div>
            <button className="ui button green">update</button>
        </form>
    </div>)
}

export default EditContact
