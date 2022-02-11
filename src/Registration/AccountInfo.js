import React, { Component } from 'react';
import '../styles/AccountInfo.scss'

export class AccountInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            darassa: "",
            social: "",
            gender: "M",
        }
    }
    classes = ["Y1A", "Y1B", "Y2A", "Y2B", "Y2C", "Y3A", "Y3B"]
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    async handleSubmit(e){
        e.preventDefault()
        this.props.state.fullName = this.state.name
        this.props.state.darassa = this.state.darassa
        this.props.state.social = this.state.social
        this.props.state.gender = this.state.gender
        // console.log(this.props.state)
         this.props.nextStep()
    }

    handleGender = (e) => {
        this.setState({gender: e.target.value})
    }

  render() {
    // const { values } = this.props
    return (
        <section className='mainsection'>
            <section className=''>
                <section className=''>
                    <form className='form-container col-12 col-sm-3 col-md-3' onSubmit={e => this.handleSubmit(e)}>
                     <h4 className='text-center'><span className='text-danger'>Love</span>Accord</h4>
                     <h6 className=''>Register your personal RCA Info!</h6>
                        <div className=" form-group">
                            <label className="form-label" htmlFor="name" class>Enter Your Name</label>
                            <input type="text" placeholder='e.g David' className="form-control" name="name" required onChange={e => this.setState({name: e.target.value})}/>
                        </div>
                        {this.state.gender === "M" ? (
                            <>
                                <div class="form-group form-check">
                                    <div><label>Gender</label></div>
                                    <input className="form-check-input" type="radio" value ="M" name="gender" checked id="flexRadioDefault1"></input>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1"> Male </label>
                                </div>
                                <div class="form-group form-check">
                                    <input className="form-check-input" type="radio" value="F" name="gender" id="flexRadioDefault2" onClick={e => this.handleGender(e)}></input>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <div class="form-group form-check">
                                    <div><label>Gender</label></div>
                                    <input className="form-check-input" type="radio" value ="M" name="gender" id="flexRadioDefault1" onClick={e => this.handleGender(e)}></input>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1"> Male </label>
                                </div>
                                <div class="form-group form-check">
                                    <input className="form-check-input" type="radio" value="F" name="gender" checked id="flexRadioDefault2"></input>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                </div>
                            </>
                        )
                        }
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="class">Your Class</label>
                            <select name="class" id="class" className='form-control' required onChange={e => this.setState({darassa: e.target.value})}>
                                <option value=""></option>
                                {this.classes.map(className => <option value={className}>{className}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="ighandle">Your Instagram handle</label>
                            <input type="text" className="form-control" placeholder='e.g @baganineza_david' name="ighandle" required  onChange={e => this.setState({social: e.target.value})}/>
                        </div>
                        <br />

                        <div className="text-right bt">
                            <button className="btn " type='submit'>Continue</button>
                        </div>
                    </form>
                </section>
            </section>
        </section>

    )
    
  }
}

export default AccountInfo;
