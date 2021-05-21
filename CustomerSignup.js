import { Button, TextField } from '@material-ui/core'
import React, { useState } from "react";
import { render } from 'react-dom';

function CustomerSignup()
{
    const [userRegistration,setuserRegistration] = useState(
        {
            fullname : "",
            username : "",
            password : "",
            mobileno : "",

        });

        const [records,setRecords] = useState([]);
    const handleInput = (e) =>{
        const name=e.target.name;
        const value = e.target.value;
        setuserRegistration({...userRegistration, [name] : value})


    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newRecord= { ...userRegistration, id: new Date().getDate().toString() }
        setRecords([...records,newRecord]);
    }
    
    return(
     <>
    
    <div>
                <form onSubmit={handleSubmit} style={{ padding: '2%', marginLeft: '15%', marginTop: '5%', width: '60%', boxShadow: '12px 12px 16px 0 rgba(0, 0, 0, 0.25),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)' }}>
                <h2 style={{textAlign:'center'}}>Customer Sign Up</h2>

                    <TextField required style={{ marginBottom: '5%' }} variant="outlined" label="Full Name" value={userRegistration.fullname} fullWidth name="fullname" onChange={handleInput}/><br />
                    <TextField required style={{ marginBottom: '5%' }} variant="outlined" label="User Name" value={userRegistration.username} autoComplete="off" fullWidth name="username" onChange={handleInput}/><br />
                    <TextField required style={{ marginBottom: '5%' }} variant="outlined" label="Password" value={userRegistration.password} autoComplete="off" type="password" fullWidth name="password" onChange={handleInput}/><br />
                    <TextField required style={{ marginBottom: '5%' }} variant="outlined" label="Mobile No" value={userRegistration.mobileno}  fullWidth name="mobileno" onChange={handleInput}/><br />
                    <Button variant="contained" type="submit" style={{ width: '100%' } }  >Sign Up</Button>
                </form>
               
               </div>
     </>
    );
}

export default CustomerSignup;