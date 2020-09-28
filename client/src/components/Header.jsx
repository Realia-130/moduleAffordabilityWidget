import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  //padding: 0 0 0 10px;
  flex: 1;

  h3 {
    margin: 0 0 17px 0;
  }
`;

const Payment = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
  margin: 1px 0 0 0;
  letter-spacing: -0.1px;
`;

const Header = ({ payment }) => {
  const formatPayment = numeral(payment).format('0,0');

  return (
    <HeaderContainer>
      <h3 className='title'>Affordability</h3>
      <h4>Calculate your monthly mortgage payments</h4>
      <Payment>
        Your est. payment:
        $
        {formatPayment}
        /month
      </Payment>
    </HeaderContainer>
  );
};

export default Header;
