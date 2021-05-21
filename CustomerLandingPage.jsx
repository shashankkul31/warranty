import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import "./Customer.css";
import { IP, token } from "../../ip/IPConfig";
import { Link } from "react-router-dom";


const car = [
  {
    id: 1,
    name: "Car name 1",
  },
  {
    id: 2,
    name: "Car name 2",
  },

  {
    id: 3,
    name: "Car name 3",
  },
];

function CustomerLandingPage() {
  const [carquotes, setcarquotes] = useState([])
  useEffect(async () => {
    console.log(`authorization Bearer ${token} url: ${IP}/customer/quotes/1`);
    console.log('login token ',sessionStorage.getItem('token'));
    await fetch(`${IP}/customer/quotes/1`, {
      headers: new Headers({
        'authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    }).then(async res => {
      const response = await res.json()
      console.log('quotes data ',response);
      setcarquotes(response);
    }).catch(err => {
      console.log('error in customer quote ', err);
    })
  }, []);
  return (
    <>
      <p style={{ marginLeft: "20vh", marginTop: "10vh" }}>Welcome,</p>
      {/* Name     */}
      <h1 style={{ marginLeft: "20vh" }}>Adam Steve!</h1>
      <p style={{ marginLeft: "20vh" }}>Here is your bid list</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: "20vh", marginRight: "22vh", }}>
        {carquotes.map((data,index) => {
          return (
            <div className="cont" style={{ padding: '1%' }}>
              <p>Quote ID: {data.quote_id}</p>
              <p>|</p>
              <p>{data.car_model}</p>
              <p>|</p>

              <Button className="btn btn-primary"  variant="contained" color="primary">
              <Link to={`/customer/quote/bid/${data['quote_id']}`} style={{textDecoration:'none',color:'white'}}>View bids</Link>
              </Button>
            </div>
          )
        })}
        {/* {carquotes.map((data) => {
          return (
            <div className="cont" style={{ padding: '1%' }}>
              <p>Quote ID: {data.quote_id}</p>
              <p>|</p>
              <p>{data.car_model}</p>
              <p>|</p>

              <Button className="quo" variant="contained" color="primary">
                View bids
              </Button>
            </div>
          );
        })} */}
      </div>
      <br />
      <center>
        <Button variant="contained"><Link to="/customer/quote"> Add car</Link></Button>
      </center>
    </>
  );
}

export default CustomerLandingPage;
