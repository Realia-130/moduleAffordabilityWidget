import React from 'react';
import styled from 'styled-components';
import RangeSlider from './RangeSlider.jsx';

const InterestRateContainer = styled.div`
flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: space-between;
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
  margin-bottom: 25px;

  input {
    width: 75px;
  }
`;

const InterestRate = ({ homePrice }) => (
  <InterestRateContainer>
    <TopContainer>
      <h4>Interest Rate</h4>
      <input type='text' className='money-input'></input>
    </TopContainer>
    <RangeSlider homePrice={homePrice} />
  </InterestRateContainer>
);

export default InterestRate;