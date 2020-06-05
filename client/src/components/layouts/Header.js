import React from 'react'
import styled from 'styled-components';
import headerImage from '../../images/header.jpg'

function Header() {

  return (
    <HeaderContainer className="d-flex align-items-center justify-content-center">
      <div>
      <h1 className="display-3 text-center">
        MERN BLOG
      </h1>
      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  background: url(${headerImage}) no-repeat center/cover;
  height: 15rem;
  h1 {
    text-shadow: 3px 3px 5px rgb(0, 0, 0);
    color: #dce2e6;
  }
`
