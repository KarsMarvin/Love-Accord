import './Results.scss';
// import {useState} from "react"
// import jwtDecode from 'jwt-decode';
import Loader from "../components/heartsloader.gif"
import { useEffect , useState} from 'react';
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

    const [userMatch, setuserMatch] = useState(
        {
            "interest": {
              "char": {
                "skincolor": "brown",
                "height": "tall"
              },
              "music": "hiphop",
              "sports": "football",
              "values": "respect",
              "searching": "relationship",
              "creativity": "art"
            },
            "otherInt": {
              "social": "ig",
              "news": "showbizz"
            },
            "_id": "6207b91af8d63e1f87a22b19",
            "fullName": "VERITE",
            "darassa": "Y2B",
            "social": "dd",
            "gender": "F",
            "movie": "action",
            "isTaken": true,
            "__v": 0
          }
    )

    let wait = false
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
      setuserMatch( {
        "interest": {
          "char": {
            "skincolor": "brown",
            "height": "tall"
          },
          "music": "hiphop",
          "sports": "football",
          "values": "respect",
          "searching": "relationship",
          "creativity": "art"
        },
        "otherInt": {
          "social": "ig",
          "news": "showbizz"
        },
        "_id": "6207b91af8d63e1f87a22b19",
        "fullName": "VERITE",
        "darassa": "Y2B",
        "social": "dd",
        "gender": "F",
        "movie": "action",
        "isTaken": true,
        "__v": 0
      })
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
                <h5>Your match is:</h5>
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
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
}

export default Results;