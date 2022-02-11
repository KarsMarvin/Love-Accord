import axios from 'axios';
import NextButton from '../components/NextButton';
import './Social.css'
import React ,{useState} from 'react'

function Social(props){
    const submitHandler = async (e) => {
        e.preventDefault();
        if(props.state.otherInt.social !== 0 && props.state.otherInt.news !==0){
            props.nextStep();
        }
    }
    const [newsxtics, setnewsxtics] = useState([
            {name:"🧑🏽‍🎤 Show-bizz",active:false,value:"showbizz"},
            {name:"🤽🏿‍♀️ Sports",active:false,value:"sports"},
            {name:"👨🏻‍💻 Science&tech",active:false,value:"science&tech"},
            {name:"🧑🏽‍💼 Business",active:false,value:"business"},
    ])
    const [socialxtics, setsocialxtics] = useState([
            {name:"🔶Instagram",active:false,value:"ig"},
            {name:"🔷Twitter",active:false,value:"twitter"},
            {name:"🟩Whatsapp",active:false,value:"tsapp"},
    ])
    let changeHandler = name => {
        let newsCopy = newsxtics;
        for(let i=0; i < newsCopy.length; i++){
            if(newsCopy[i].name === name){
                newsCopy[i].active = true
                props.state.otherInt.news = newsCopy[i].value
            }
            else {
                newsCopy[i].active = false
            }
        }
        setnewsxtics(newsCopy)
    }
    let changeHandler2 = name => {
        let socialCopy = socialxtics;
        for(let i=0; i < socialCopy.length; i++){
            if(socialCopy[i].name === name){
                socialCopy[i].active = true
                props.state.otherInt.social = socialCopy[i].value
            }
            else {
                socialCopy[i].active = false
            }
        }
        setsocialxtics(socialCopy)
        // console.log(socialCopy)
    }


    let submit = async e => {
        console.log(props.state)
        await axios.post("https://v-a-l.herokuapp.com/api/users", {
                "fullName":props.state.fullName,
                "darassa": props.state.darassa,
                "social":props.state.social,
                "gender":props.state.gender,
                "movie":props.state.movie,
                "interest": {
                  "music":props.state.interests.music,
                  "sports":props.state.interests.sports,
                  "values":props.state.interests.values,
                  "creativity":"art",
                  "searching":props.state.interests.searching,
                  "char": {
                    "skincolor":props.state.char.skincolor,
                    "height":props.state.char.height,
                  }
                },
                "otherInt": {
                  "social":props.state.otherInt.social,
                  "news":props.state.otherInt.news
                }
            }
        )
        .then(data => {
            // window.alert(data.data.message)
            // window.alert("Check your name")
            localStorage.setItem("token", data.data.token)
            window.location.href = "/desc-your-match";
        })
        .catch(error => {
            alert(error.response.data.message)
             window.location.reload(false)
        })
    }
    
    return(
        <div className='social'>
            <h1>Social Media</h1>
            <h2>Your favorite Social Media and Content You Look For The Most On It</h2>
            <form className="social-container">
            <div className='socialcard'>
            {newsxtics && newsxtics.map((newsxtics,i) => (            
                <div key={i} className={newsxtics.active ? "input-item active" : "input-item"} onClick={e => changeHandler(newsxtics.name)}>
                    <div className="paragraph">
                        <p>{newsxtics.name}</p>
                    </div>
                </div>
            ))}
            <br />
            {socialxtics.map((socialxtic, i) => (            
                <div key={i} className={socialxtic.active ? "input-item active2" : "input-item"} onClick={e => changeHandler2(socialxtic.name)}>
                    <div className="paragraph">
                        <p>{socialxtic.name}</p>
                    </div>
                </div>
            ))}
            </div>
            </form>
            
            <div className="text-right buttondiv" onClick={e => submit(e)}>
                <NextButton/>
            </div>
        </div>
    )
}

export default Social;