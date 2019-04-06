import React, { Component } from 'react'

export default class ReactFormBootstrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this) 
    //bind this variable inside these functions so that, 
    //this does not reference the onClick function but the this used for the component 
  }
  handleOnChange(e) {
    if (e.target.id === "exampleInputEmail0") {
      this.setState({ username: e.target.value })
    } else if (e.target.id === "exampleInputPassword0") {
      this.setState({ password: e.target.value })
    }
  }
  handleOnSubmit(e){
    e.preventDefault(); //Prevents th default submit action from reloading the page
    //Do some action here using states when user clicks on handleOnsubmit
  }
  render() {
    return (
      <div className="my-5"> {/*add 5 units margint to the y axis i.e top and bottom*/}
        <form>
          <fieldset>
            <legend>React Controlled components</legend>
            <div className="row my-2">
              <div className="form-group col-sm-12 col-md-6">
                <label htmlFor="exampleInputEmail0" className="col-sm-3">Email address</label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control "
                    id="exampleInputEmail0"
                    aria-describedby="emailHelp0"
                    placeholder="Enter email"
                    onChange={this.handleOnChange}
                    value={this.state.username} />
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label htmlFor="exampleInputPassword0" className="col-sm-3">Password</label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword0"
                    placeholder="Password"
                    onChange={this.handleOnChange}
                    value={this.state.password} />
                </div>
              </div>
            </div>
            {/* <div className="row">
            <div className="col-sm-6">
              <button type="button" className="btn btn-primary">Primary</button>
            </div>
            <div className="col-sm-6">
              <button type="button" className="btn btn-success">Success</button>
            </div>
          </div> */}
            <div className="row">
              <div className="col"></div>
              <div className="col-sm-6">
                <button type="button" className="btn btn-primary btn-block">Primary</button>
              </div>
              <div className="col"></div>
            </div>
          </fieldset>

        </form>
        <hr />
        <i className="text-center">
          Use the Forms Below for Reference, to view different types of Elements that bootstrap has to offer. <br />
          Reference Links:<br />
          i.  Fieldset: <a href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_fieldset">https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_fieldset</a> <br />
          ii. Bootstrap forms: <a href="https://getbootstrap.com/docs/4.0/components/forms/">https://getbootstrap.com/docs/4.0/components/forms/</a><br />
          iii.  Bootstrap Themes: <a href="https://bootswatch.com/">https://bootswatch.com/ </a><br />
          iv. Current Bootstrap Theme: Litera- <a href="https://bootswatch.com/litera/"> https://bootswatch.com/litera/</a><br />
          v.  Bootstrap Theme's CDNs: <a href="https://www.bootstrapcdn.com/bootswatch/">https://www.bootstrapcdn.com/bootswatch/</a>
          vi. Bootstrap Grid: <a href="https://getbootstrap.com/docs/4.0/layout/grid/">https://getbootstrap.com/docs/4.0/layout/grid/</a>
        </i>
        <hr />
        <form>
          <fieldset>
            <legend>Legend 1 for Reference</legend>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value="email@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelect1">Example select</label>
              <select className="form-control" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelect2">Example multiple select</label>
              <select multiple="" className="form-control" id="exampleSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Example textarea</label>
              <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
              <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
            </div>
            <fieldset className="form-group">
              <legend>Radio buttons</legend>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                  Option one is this and that—be sure to include why it's great
              </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                  Option two can be something else and selecting it will deselect option one
              </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                  Option three is disabled
              </label>
              </div>
            </fieldset>
            <fieldset className="form-group">
              <legend>Checkboxes</legend>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="" checked="" />
                  Option one is this and that—be sure to include why it's great
              </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="" disabled="" />
                  Option two is disabled
              </label>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset>
        </form>

        <hr />

        <legend>Legend 2 for Reference</legend>
        <div className="form-group">
          <fieldset disabled="">
            <label className="control-label" htmlFor="disabledInput">Disabled input</label>
            <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="" />
          </fieldset>
        </div>

        <div className="form-group">
          <fieldset>
            <label className="control-label" htmlFor="readOnlyInput">Readonly input</label>
            <input className="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly="" />
          </fieldset>
        </div>

        <div className="form-group has-success">
          <label className="form-control-label" htmlFor="inputSuccess1">Valid input</label>
          <input type="text" value="correct value" className="form-control is-valid" id="inputValid" />
          <div className="valid-feedback">Success! You've done it.</div>
        </div>

        <div className="form-group has-danger">
          <label className="form-control-label" htmlFor="inputDanger1">Invalid input</label>
          <input type="text" value="wrong value" className="form-control is-invalid" id="inputInvalid" />
          <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
        </div>

        <div className="form-group">
          <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Large input</label>
          <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge" />
        </div>

        <div className="form-group">
          <label className="col-form-label" htmlFor="inputDefault">Default input</label>
          <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
        </div>

        <div className="form-group">
          <label className="col-form-label col-form-label-sm" htmlFor="inputSmall">Small input</label>
          <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
        </div>

        <div className="form-group">
          <label className="control-label">Input addons</label>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
