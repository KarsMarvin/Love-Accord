import axios from 'axios';
import NextButton from '../components/NextButton';
import './Social.css'

function Social(props){
    let submit = async e => {
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
                  "social":"ig",
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
            // console.log(error.response)
            window.alert(error.response.data.message)
        })
    }
    return(
        <div className='social'>
            <h1>Which news and social media?</h1>
            <form className="social-container">
            <div className='socialcard'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏽‍🎤Show-bizz</p>
                </div>
                <div className="input">   
                <input type="radio" value="showbizz" name='searching' onClick={e => props.state.otherInt.news = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🤽🏿‍♀️Sports</p>
                </div>
                <div className="input">   
                <input type="radio" value="sports" name='searching' onClick={e => props.state.otherInt.news = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>👨🏻‍💻Science&tech</p>
                </div>
                <div className="input">   
                <input type="radio" value="science&tech" name='searching' onClick={e => props.state.otherInt.news = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏽‍💼Business</p>
                </div>
                <div className="input">   
                <input type="radio" value="business" name='searching' onClick={e => props.state.otherInt.news = e.target.value}/>
                </div>
            </div>
            <div className='input-item mt-4'>
                 <div className="paragraph">
                <p>🔶Instagram</p>
                </div>
                <div className="input">   
                <input type="radio" value="ig" name='searching1' onClick={e => props.state.otherInt.social = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🔷Twitter</p>
                </div>
                <div className="input">   
                <input type="radio" value="twitter" name='searching1' onClick={e => props.state.otherInt.social = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🟩Whatsapp</p>
                </div>
                <div className="input">   
                <input type="radio" value="tsapp" name='searching1' onClick={e => props.state.otherInt.social = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🔵Facebook</p>
                </div>
                <div className="input">   
                <input type="radio" value="fb" name='searching1' onClick={e => props.state.otherInt.social = e.target.value}/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="text-right buttondiv" onClick={e => submit(e)}>
                <NextButton/>
            </div>
        </div>
    )
}

export default Social;