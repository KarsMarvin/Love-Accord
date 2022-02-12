import './Results.scss';
// import {useState} from "react"
// import jwtDecode from 'jwt-decode';
import Loader from "../components/heartsloader.gif"
import { useEffect, useState } from 'react';
import axios from 'axios';
// import axios from 'axios';

function Results(){
    // let tokenFound = localStorage.getItem("token");
    // if(!tokenFound){
    //     window.location.href = "/";
    // }
    // let decoded;
    // let token = localStorage.token
    if(!localStorage.token){
        window.location.href = "/"
    }
    const [userMatch, setuserMatch] = useState(undefined)
    let wait = true
    useEffect(() => {
        let config = {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
        };
      async function getResults(){
        await axios.get("https://v-a-l.herokuapp.com/api/users/getMatch", config)
        .then(data => {
            console.log(data.data)
        })
        .catch(err => console.log(err.response))
      }
      getResults()
    }, [])
    
    return wait ?
        (
            <div className='waitResults'>
                 <div>
                    <h5>Holla! We findin' your match... Wait just <span>2 hours</span></h5>
                    <br />
                 <img src={Loader} alt="" />
                 </div>
            </div>
        )
        :
        (
            <div className='results'>
                <h1>Happy for You😍!</h1>
                <h2>Your match is:</h2>
                <div className='results-container mt-4'>
                    <h5>hello results</h5>
                </div>
            </div>
        )
}

export default Results;