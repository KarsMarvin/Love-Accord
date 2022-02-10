import '../InterestsDesc/CharsReg.css'

function NextButton({title="Next"}){

    return(
            <div className="interestbutton">
                <button>{title}</button>
            </div>
    )
}

export default NextButton;