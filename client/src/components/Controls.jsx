import React from 'react';
import styled from 'styled-components';
import HomePrice from './HomePrice.jsx';
import DownPayment from './DownPayment.jsx';
import InterestRate from './InterestRate.jsx';
import LoanType from './LoanType.jsx';

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  border: 1px soid black;
`;

const Controls = ({ homePrice }) => (
  <ControlsContainer>
    <HomePrice homePrice={homePrice} />
    <DownPayment homePrice={homePrice} />
    <InterestRate homePrice={homePrice} />
    <LoanType />
  </ControlsContainer>
);

export default Controls;
