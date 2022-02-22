import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";


const Nav = () => {
  const state = useSelector((state)=> state.handlecart);
  console.log(state);

  const style1={
    marginLeft: "0.5rem",
  }

    return (

        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              MAX COLLECTION
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/Product">
                   PRODUCTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/contact">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
              <div className="buttons">
                  <NavLink to="/login" className="btn btn-outline-dark">
                     <i className="fa fa-sign-in "></i> Login</NavLink>
                  <NavLink to="/register" className="btn btn-outline-dark" style={style1}>
                     <i className="fa fa-user-plus me-2"></i> Register</NavLink>
                  <NavLink to="/Cart" className="btn btn-outline-dark" style={style1}>
                     <i className="fa fa-shopping-cart me-2"></i> Cart ({state.length})</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Nav;