import React, { Component } from 'react';

export class AccountInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

  render() {
    const { values, inputChange } = this.props
    return (
        <section className='container-fluid bg'>
            <section className='row justify-content-center'>
                <section className='col-12 col-sm-3 col-md-6 '>
                    <form className='form-container w-75'>
                     <h3 card-title>Account Info</h3>
                        <div className=" form-group">
                            <label htmlFor="name">Enter Your Name</label>
                            <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                        </div>
                        <label>Gender</label>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> Male </label>
                        </div>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="class">Your Class</label>
                            <input type="text" className="form-control" name="class" onChange={inputChange('classroom')} value={values.classroom} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ighandle">Your Instagram handle</label>
                            <input type="text" className="form-control" name="ighandle" onChange={inputChange('ighandle')} value={values.class} />
                        </div>
                        <br />

                        <div className="text-right">
                            <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                        </div>
                    </form>
                </section>
            </section>
        </section>

    

    )
    
  }
}

export default AccountInfo;
