import { AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { useHistory } from "react-router";
import React from 'react'


function User({firstname,lastname,phone,email,birthday,id, deleteUser}) {
    let history = useHistory();

    const editUser = async (id)=>{
        history.push(`/editUser/${id}`);
    }

    return (
        <div className="event">
            <h3>{firstname} {lastname} 
            <AiFillDelete style={{position:'sticky', left:'350px'}}
            onClick={()=> deleteUser(id)}/>
            <AiFillEdit onClick={()=> editUser(id)}/> </h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{birthday}</p>
        </div>
    )
}

export default User
