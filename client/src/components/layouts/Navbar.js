import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-md navbar-dark px-md-5">

      <NavLink to="/"  className="nb"><h3 className="my-0 font-weight-bold">MERN BLOG</h3></NavLink>

        <button className="navbar-toggler " type="button" 
          data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item ">
            <NavLink  className="nav-link " exact activeClassName="current" to="/"><h4 className="my-0">HOME</h4></NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink className="nav-link " activeClassName="current" to="/add-article"><h4 className="my-0">ADD NEW ARTICLE</h4></NavLink>
            </li>
          
          </ul>
        </div>

      </nav>
    </NavbarContainer>
  )
}

export default Navbar

//NAVBAR CONTAINER
const NavbarContainer = styled.div`
background: var(--dark-blue);

};
.nav-link.current { 
  color: #edf0f2 !important;
}

.nav-link {
  color: #a5acb0 !important;

  &:hover {
    background: var(--light-blue)
  };
}
.nb {
  color: #dce2e6;
  text-decoration: none;
}
`
