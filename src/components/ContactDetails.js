import React from 'react'
import user from'../images/user.jpg'
import {useLocation,Link} from 'react-router-dom'

function ContactDetails(props) {
 
    const location = useLocation()
    const {name , email} = location.state
  
    return (
        <div className="main" style={{marginTop:"80px"}}>
            <div className="ui centered card" >
                <div className="image">
                    <img src={user} alt="User's image"></img>
                </div>
                <div className="ui center aligned container content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui center aligned container">
                <Link to="/">
                <button className="ui button orange" style={{margin:"10px"}}>Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetails
