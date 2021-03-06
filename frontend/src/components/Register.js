import { AiOutlineEye, AiFillEye} from 'react-icons/ai'
import React, { useState } from 'react'
import Header from './Header';
import { useHistory } from "react-router";

function Register() {
    const history = useHistory();
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
        // console.log(firstname,lastname,email,password,conpass,phone,birthday);
        if(password !== conpass)
            alert("The password confirmation must match!");
        else{
            if(window.confirm(`Are the data you have sufficed correct?`)){
                createUser();
                alert(`User created with an email of ${email}`);
                history.push('/');
            }
        }
    }
    const createUser = async () =>{
        const res = await fetch('http://localhost:8000/api/users/post', {
        method: 'POST',
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
            <Header title="Sign Up" desc="Fill this form to create your account!" visible="true"/>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <label style={{paddingLeft:'120px'}}>Last Name</label><br />
      
                <input type="text" className="inputBox" placeholder="*" required 
                onChange={(e)=> setFirst(e.target.value)} />
                <input type="text"  className="inputBox" 
                onChange={(e)=> setLast(e.target.value)}/>
                <br />

                <label>Email</label><br />
                <input type="email" className="inputBox" placeholder="*" style={{width: '400px'}} required
                onChange={(e)=> setEmail(e.target.value)}/>
                <br />

                <label>Password </label>
                <label style={{paddingLeft:'125px'}}>Confirm Password</label><br />
                <input type={text} className="inputBox" placeholder="*" required
                onChange={(e)=> setPassword(e.target.value)}/>
                <input type={text} className="inputBox" placeholder="*" required
                onChange={(e)=> setConpass(e.target.value)}/>

                {toggle? ( <i className="icon"><AiFillEye size={20} style={{cursor:'pointer'}} 
                onClick={() => showPassword()}/></i>)
                :(<i className="icon"><AiOutlineEye size={20} style={{cursor:'pointer'}}
                onClick={() => showPassword()}/></i>) }  
                
                <label>Phone</label>
                <label style={{paddingLeft:'205px'}}>Birthday</label>
                <br />
                <input type="text" className="inputBox" placeholder="*"  style={{width: '54%'}} required
                onChange={(e)=> setPhone(e.target.value)}/>
                <input type="date" className="inputBox" 
                onChange={(e)=> setBirthday(e.target.value)}/>
                <br />
                <br />
                {password === conpass? ('') :('The password confirmation does not match!')}
                <br />
                <br />
                <button type="submit" className="btn">Create Account</button>
            </form>
        </div>
    )
}

export default Register
