// import { AiOutlineEye, AiFillEye} from 'react-icons/ai'
import React, { useState } from 'react'


function Register() {
    const [firstname,setFirst] = useState('');
    const [lastname,setLast] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [conpass,setConpass] = useState('');
    const [phone,setPhone] = useState('');
    const [birthday,setBirthday] = useState('');

     const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(firstname,lastname,email,password,conpass,phone,birthday);
        if(password !== conpass){
            alert("The password confirmation must match!");
        }else{
            createUser();
            alert(`User Created`);
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <label style={{paddingLeft:'125px'}}>Last Name</label><br />
      
                <input type="text" className="inputBox" placeholder="*" required 
                onChange={(e)=> setFirst(e.target.value)} />
                <input type="text"  className="inputBox" 
                onChange={(e)=> setLast(e.target.value)}/>
                <br />

                <label>Email</label><br />
                <input type="email" className="inputBox" placeholder="*" style={{width: '410px'}} required
                onChange={(e)=> setEmail(e.target.value)}/>
                <br />

                <label>Password </label>
                <label style={{paddingLeft:'135px'}}>Confirm Password</label><br />
                <input type='password' className="inputBox" placeholder="*" required
                onChange={(e)=> setPassword(e.target.value)}/>
                <input type='password' className="inputBox" placeholder="*" required
                onChange={(e)=> setConpass(e.target.value)}/>

                {/* {toggle? ( <i className="icon"><AiFillEye size={20} style={{visibility:'hidden',cursor:'pointer'}} 
                onClick={showPassword()}/></i>)
                :(<i className="icon"><AiOutlineEye size={20} style={{visibility:'visible',cursor:'pointer'}}
                onClick={showPassword()}/></i>) }   */}
                
                <label>Phone</label>
                <label style={{paddingLeft:'210px'}}>Birthday</label>
                <br />
                <input type="text" className="inputBox" placeholder="*"  style={{width: '55%'}} required
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
