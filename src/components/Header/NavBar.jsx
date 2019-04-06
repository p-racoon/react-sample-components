import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">UNI.xyz Shop</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"> {/*add class active here to make it appear as active */}
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item"> {/*add class active here to make it appear as active */}
                <Link to="/react-form-bootstrap" className="nav-link">Form</Link>
              </li>
            </ul>
            <div className="my-2 my-lg-0">
              {/* <button className="btn btn-secondary my-2 my-sm-0" >Cart</button> */}
            </div>
            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          </div>
        </div>
      </nav>
    )
  }
}
