import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-2">
        <Link to="/">
          <img src={logo} alt="store" style={{width:"50px", height:"50px"}} />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/" className="nav-link">
              House of T-Shirts
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background-color: white;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:100;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;


  .nav-link {
    color: blue !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
