import React from 'react';
import styled from 'styled-components';

const InterestRateContainer = styled.div`
flex: 1;
  display: flex;
  flex-flow: column nowrap;
  border-style: solid;
  border-color: transparent;
  border-width: 16px 8px 0px;
}
`;

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  input {
    width: 75px;
  }
`;

const InterestRate = () => (
  <InterestRateContainer>
    <TopContainer>
      <h4>Interest Rate</h4>
      <input type='text' className='money-input'></input>
    </TopContainer>
  </InterestRateContainer>
);

export default InterestRate;