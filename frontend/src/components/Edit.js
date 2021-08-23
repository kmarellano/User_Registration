import { AiOutlineEye, AiFillEye} from 'react-icons/ai'
import React, { useState, useEffect } from 'react'
import Header from './Header';
import { useHistory } from "react-router";

function Edit(props) {
    const history = useHistory();
    const [user,setUser] = useState([]);
    const [firstname,setFirst] = useState('');
    const [lastname,setLast] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [conpass,setConpass] = useState('');
    const [phone,setPhone] = useState('');
    const [birthday,setBirthday] = useState('');
    const [toggle,setToggle] = useState(false);
    const [text,setText] = useState('password');

    const handleSubmit = (e) =>{
        e.preventDefault();
      
        if(password !== conpass)
            alert("The password confirmation must match!");
        else{
            if(window.confirm(`Are the data you have sufficed correct?`)){
                updateUser();
                alert(`User updated with an email of ${user.email}`);
                history.push('/');
            }
        }
    }

    useEffect(() => {
        getUser();
    });


    const getUser = async () =>{
        const id = props.match.params.id;
        const res = await fetch(`http://localhost:8000/api/users/${id}`);
        const data = await res.json();
        setUser(data);
    }

    // eslint-disable-next-line
    useEffect(()=>{ 
        setFirst(user.firstname)
        setLast(user.lastname)
        setEmail(user.email)
        setPassword(user.password)
        setConpass(user.password)
        setPhone(user.phone)
        setBirthday(user.birthday)
        console.log('mounted');
    },[])

    const updateUser = async () =>{
        const id = props.match.params.id;
        const res = await fetch(`http://localhost:8000/api/users/update/${id}`, {
        method: 'PUT',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },        
        body: JSON.stringify({firstname,lastname,email,password,phone,birthday})
        })
        const data = res.json();
        console.log(data);
    }
 
    const showPassword = () =>{
        if(toggle){
            setToggle(false);
            setText('password');
        }
        else   {
            setText('text');
            setToggle(true);
        }
    }

    return (
        <div>
            <Header title="Edit User" visible="true" link="users"/>
            <form onSubmit={handleSubmit} >
                <label>First Name</label>
                <label style={{paddingLeft:'120px'}}>Last Name</label><br />
      
                <input type="text" className="inputBox" placeholder="*" required 
                onChange={(e)=> setFirst(e.target.value)} 
                defaultValue={user.firstname}/>
                <input type="text"  className="inputBox" 
                onChange={(e)=> setLast(e.target.value)}
                defaultValue={user.lastname}/>
                <br />

                <label>Email</label><br />
                <input type="email" className="inputBox" placeholder="*" style={{width: '400px'}} required
                onChange={(e)=> setEmail(e.target.value)}
                defaultValue={user.email}/>
                <br />

                <label>Password </label>
                <label style={{paddingLeft:'125px'}}>Confirm Password</label><br />
                <input type={text} className="inputBox" placeholder="*" required
                onChange={(e)=> setPassword(e.target.value)}
                defaultValue={user.password}/>
                <input type={text} className="inputBox" placeholder="*" required
                onChange={(e)=> setConpass(e.target.value)}
                defaultValue={user.password}/>

                {toggle? ( <i className="icon2"><AiFillEye size={20} style={{cursor:'pointer'}} 
                onClick={() => showPassword()}/></i>)
                :(<i className="icon2"><AiOutlineEye size={20} style={{cursor:'pointer'}}
                onClick={() => showPassword()}/></i>) }  
                
                <label>Phone</label>
                <label style={{paddingLeft:'205px'}}>Birthday</label>
                <br />
                <input type="text" className="inputBox" placeholder="*"  style={{width: '54%'}} required
                onChange={(e)=> setPhone(e.target.value)}
                defaultValue={user.phone}/>
                <input type="date" className="inputBox" 
                onChange={(e)=> setBirthday(e.target.value)}
                defaultValue={user.birthday}/>
                <br />
                <br />
                {password === conpass? ('') :('The password confirmation does not match!')}
                <br />
                <br />
                <button type="submit" className="btn">Update Account</button>
            </form>
        </div>
    )
}

export default Edit
