import './Results.scss';
// import {useState} from "react"
import jwtDecode from 'jwt-decode';
import Loader from "../components/heartsloader.gif"
import axios from 'axios';

function Results(){
    let decoded;
    let token = localStorage.token
    // const [userMatch, setuserMatch] = useState(undefined)
    let wait = true
    if(token){
        try {
            let user = axios.get("")
        } catch (error) {
            window.location.href = "/"
        }
    }
    else{
        window.location.href = "/"
    }
    return wait ?
        (
            <div className='waitResults'>
                 <div>
                    <h5>Holla! We findin' your match... Wait just <span>3 hours</span></h5>
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