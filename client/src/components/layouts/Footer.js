import React from 'react';
import styled from 'styled-components';

function Footer() {


  return (
    <FooterContainer>
      <p className="text-white-50 text-center pt-3">
        &copy;{new Date().getFullYear()} All Rights Reserved.
      </p>
    </FooterContainer>
  )
}

export default Footer


const FooterContainer = styled.div`
  background: var(--dark-blue);
  height: 4rem;
`
