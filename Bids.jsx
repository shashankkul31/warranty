import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./Customer.css";
import { IP, token } from "../../ip/IPConfig";
import { Link } from "react-router-dom";


const car = [
  {
    id: 1,
    name: "Some text",
  },
  {
    id: 2,
    name: "Bid amount",
  },

  {
    id: 3,
    name: "Bid amount",
  },
];

function Bids(props) {
  const [carquotes, setcarquotes] = useState([])
  useEffect(async () => {
    console.log(`authorization Bearer ${token} url: ${IP}/customer/quotes/1`);
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

  const [bids, setBids] = useState([])
  useEffect(async () => {
    console.log(`authorization Bearer ${token} url: ${IP}/customer/quote/bid/${props.match.params.id}`);
    await fetch(`${IP}/customer/quote/bid/${props.match.params.id}`, {
      headers: new Headers({
        'authorization': `Bearer ${sessionStorage.getItem('token')}`,
      })
    }).then(async res => {
      const response = await res.json()
      console.log('bid data ',response);
      setBids(response);
    }).catch(err => {
      console.log('error in customer quote ', err);
    })
  }, []);
  return (
    <>
      {/* QUOTE id      */}
      <h4 style={{ marginTop: "10vh", marginLeft: "7vh" }}>
        #21122
        <FormControl
          variant="outlined"
          style={{ marginLeft: "120vh", width: "30vh" }}
        >
          <Select
          
            native
            style={{ blockSize: "5vh", backgroundColor: "	#1E90FF" }}
          >
            {carquotes.map((data,index)=>{
              return(
                <option  value={index+10}>{data['car_model']}</option>
              )
            })}
            
          </Select>
        </FormControl>
      </h4>
      {/* CAR NAME */}
      <h2 style={{ marginLeft: "7vh" }}>BMW Z4 2012</h2>
      <p style={{ marginLeft: "7vh" }}>Here are the best bids for you</p>
      <br />
      <br />
      <div style={{ marginLeft: "7vh", marginRight: "10vh" }}>
        {bids.map((data) => {
          return (
            <div className="cont" style={{padding:'1%'}}>
              <p>Dealer : {data['dealer_company']}</p>
              <p>|</p>
              <p>{data['bid_price']}</p>
              <p>|</p>

              <Button variant="contained" color="primary" className="" >
                See details
              </Button>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ blockSize: "7vh", marginLeft: "20vh", marginTop: "5vh" }}
      >
        Emil me all the details
      </Button>
      <Button
        variant="contained"
        style={{
          blockSize: "7vh",
          marginLeft: "70vh",
          marginTop: "5vh",
          backgroundColor: "green",
        }}
      >
        Donate
      </Button>
    </>
  );
}

export default Bids;
