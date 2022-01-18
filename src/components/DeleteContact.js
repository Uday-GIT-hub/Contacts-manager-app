import React from 'react'
import {useLocation ,useNavigate} from 'react-router-dom'


function DeleteContact(props) {
    const location = useLocation()
    const backtolist = useNavigate()

    const Delete = () =>{
        props.getContactId(id) 
        backtolist('/')
    }
    
    const {id, name , email} = location.state
    return (
        <div className="ui left aligned card" style={{marginTop : "80px",backgroundColor : "#ecf0f1",padding:"10px",borderRadius :"10px",cursor:"pointer"}}>
            <div className="content">
                <div className="header"><h2>Are you sure u want to delete contact</h2></div>
                <button className="ui inverted red button" style={{margin:"10px"}} onClick={Delete}>Yes</button>
                <button className="ui inverted green button" style={{margin:"10px"}} onClick={() => backtolist('/')}>No</button>
            </div>
            
        </div>
    )
}

export default DeleteContact
