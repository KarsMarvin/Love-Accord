import './Results.scss';
// import {useState} from "react"
// import jwtDecode from 'jwt-decode';
import Loader from "../components/heartsloader.gif"
import { useEffect , useState} from 'react';
import axios from 'axios';
import giphfy from "../components/giphy.gif"
import jwtdecode from "jwt-decode"
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
    else {
        var decoded = jwtdecode(localStorage.token)
    }

    const [userMatch, setuserMatch] = useState(undefined)
    const [username, setusername] = useState(undefined)
    const [nomatch, setnomatch] = useState(false)

    let wait = false
    useEffect(() => {

      async function getResults(){
        await axios.post("https://v-a-l.herokuapp.com/api/users/addToken", {id: decoded.id})
        .then(async data => {
            localStorage.setItem("token", data.data.token)
            await axios.get("https://v-a-l.herokuapp.com/api/users/getMatch", {
                headers: {
                  authorization: "Bearer " + data.data.token,
                },
            })
            .then(data => {
                setuserMatch(data.data.pattern)
                setusername(data.data.yourData.fullName) 
            })
        })
        .catch(err => setnomatch(true))
      }
      getResults()
    }, [decoded.id])
    
    return wait ?
        (
            <div className='waitResults'>
                 <div>
                    <h5>Holla! We findin' your match... <span>⌛⌛</span></h5>
                    <br />
                 <img src={Loader} alt="" />
                 </div>
            </div>
        )
        :
        (
            <div className='results'>
                {nomatch ? (
                    <div className='nomatch'>
                        <h5 className='text-center'>Awww, Sorry no match foound for you!</h5>
                        <h5 className='text-center'>There is someone for u out there, but not in RCA😁</h5>
                        <div><img src={giphfy} alt="" /></div>
                    </div>
                )
            :
            (
                <>
                <h1>Happy for You😍 {username && username}!</h1>
                <h5>Your best match is:</h5>
                <div className='results-container mt-4'>
                    {userMatch && 
                    (
                        <>
                            <h6>{userMatch.fullName}</h6>
                            <div>
                                <p>{userMatch.darassa}</p>
                                <p><span>IG: </span>{userMatch.social}</p>
                            </div>
                            <div>
                                <h6 className='text-center'>Characteristics</h6>
                                <div>
                                    {Object.keys(userMatch.interest.char).map((keyname, i) => 
                                        typeof userMatch.interest.char[keyname] !== "object" &&
                                            (
                                               <div key={i}>
                                                    <h6>{keyname.toUpperCase()}</h6>
                                                    <p>{userMatch.interest.char[keyname].toString()}</p>
                                               </div>
                                            )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h6 className='text-center'>Interests</h6>
                                <div>
                                    {Object.keys(userMatch.interest).map((keyname, i) => 
                                        typeof userMatch.interest[keyname] !== "object" &&
                                            (
                                               <div key={i}>
                                                    <h6>{keyname.toUpperCase()}</h6>
                                                    <p>{userMatch.interest[keyname].toString()}</p>
                                               </div>
                                            )
                                    )}
                                    <div>
                                        <h6>MOVIE</h6>
                                        <p>{userMatch.movie}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div></>
            )
            }
            </div>
        )
}

export default Results;