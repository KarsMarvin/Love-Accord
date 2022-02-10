import React, { Component } from 'react';
import '../styles/AccountInfo.scss'

export class AccountInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    handleSubmit(e){
        e.preventDefault()
        this.props.nextStep()
    }

  render() {
    const { values } = this.props
    return (
        <section className='mainsection'>
            <section className=''>
                <section className=''>
                    <form className='form-container col-12 col-sm-3 col-md-3' onSubmit={e => this.handleSubmit(e)}>
                     <h3>Account Info</h3>
                        <div className=" form-group">
                            <label className="form-label" htmlFor="name" class>Enter Your Name</label>
                            <input type="text" className="form-control" name="name" required onChange={e => inputChange(e)}/>
                        </div>
                        <div class="form-group form-check">
                            <div><label>Gender</label></div>
                            <input className="form-check-input" type="radio" value ="M" name="gender" id="flexRadioDefault1"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> Male </label>
                        </div>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" value="F" name="gender" id="flexRadioDefault2"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                        </div>
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="class">Your Class</label>
                            <input type="text" className="form-control" name="class" required onChange={e => inputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="ighandle">Your Instagram handle</label>
                            <input type="text" className="form-control" name="ighandle" required onChange={e => inputChange(e)} />
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
