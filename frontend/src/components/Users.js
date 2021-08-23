import React, {useState,useEffect} from 'react'
import User from './User';
import Header from './Header';

function Users() {
    const [user,setUser] = useState([]);
    
    useEffect(() => {
       getUsers();
    }, [])

    const getUsers = async () =>{
        const res = await fetch('http://localhost:8000/api/users')
        const data = await res.json();
        setUser(data);
    }

    const deleteUser = async (id,firstname) =>{
        if( window.confirm(`Delete ${firstname} from the database?`)){
            const res = await fetch(`http://localhost:8000/api/users/delete/${id}`,{
                method: 'DELETE',
            })
            const data = await res.json();
            console.log(data);
            window.location.reload();
        }
    }

    const dateToday = (today) =>{
       if(today){
            const date = new Date(today).toLocaleDateString("en-US");
            return date;
        }
        return today;
    }

    return (
        <div>
            <Header title="Users" visible="true"/>
            {user.map((user)=>(
            <User 
                key={user._id} 
                id={user._id}
                firstname={user.firstname}
                lastname={user.lastname}
                phone={user.phone}
                email={user.email}
                birthday={dateToday(user.birthday)}
                deleteUser={deleteUser}
             />
            ))}
           
        </div>
    )
}

export default Users
