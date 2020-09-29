import React from 'react';
import styled from 'styled-components';
import HomePrice from './HomePrice.jsx';
import DownPayment from './DownPayment.jsx';
import InterestRate from './InterestRate.jsx';

const ControlsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  border: 1px soid black;
`;

const Controls = ({ homePrice }) => (
  <ControlsContainer>
    <HomePrice homePrice={homePrice} />
    <DownPayment homePrice={homePrice} />
    <InterestRate homePrice={homePrice} />
  </ControlsContainer>
);

export default Controls;
