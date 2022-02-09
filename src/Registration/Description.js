import React, { Component } from 'react';

export class Description extends Component {
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
                    <form className="form-container w-75">
                        <div className='info'>
                            <h4>Description</h4>
                            <small>Choose the Answers That Best Describe You.</small>
                        </div>
                        <br></br>
                        <div class="form-group form-check input-item">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> Brown </label>
                        </div>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> Black </label>
                        </div>
                        <br></br>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault2"> Male </label>
                        </div>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault2"> Male </label>
                        </div>
                        <br></br>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault3"> Male </label>
                        </div>
                        <div class="form-group form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3"></input>
                            <label className="form-check-label" htmlFor="flexRadioDefault3"> Male </label>
                        </div>
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

export default Description;
