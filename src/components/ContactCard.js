import React from 'react'
import '../App.css'
import user from'../images/user.png'
import {useNavigate , Link} from 'react-router-dom'

function ContactCard(props) {
    const navigate = useNavigate()
    const {id,name,email} = props.contact
    return (
        <div className="item" style={{padding:"10px"}}>
            <img className="ui avatar image" src={user} alt="user" ></img>
        <div className="content">
            <div onClick={() => { navigate(`/contact/${id}`,{state : props.contact})}} style={{cursor:"pointer"}}>
            <div className="header">{name}</div>
            <div>{email} </div> 
            </div>
        </div>
        <i className="trash alternate outline icon" onClick={() => { navigate(`/delete/${id}`,{state : props.contact})}} style={{color:'red' ,fontSize:"20px", float:'right',marginTop : "10px",marginLeft:"10px",cursor:"pointer"}}></i>
        <i className="edit alternate outline icon" onClick={() => { navigate(`/edit`,{state : props.contact})}} style={{color:'green' ,fontSize:"20px", float:'right',marginTop : "10px",cursor:"pointer"}}></i>
    </div>
    )
}

export default ContactCard
