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
  border-radius 8px;
  background-color: rgb(245, 246, 247);
  padding: 0px 16px 16px 16px;
  margin-top: 16px;
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
