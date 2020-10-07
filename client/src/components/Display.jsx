import React from 'react';
import styled from 'styled-components';
import Chart from './Chart.jsx';
import CostBreakdown from './CostBreakdown.jsx';

const DisplayContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 767px) {
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const Display = ({ homePrice, state, toggleModal }) => (
  <DisplayContainer>
    <Chart state={state} />
    <CostBreakdown
      homePrice={homePrice}
      state={state}
      toggleModal={toggleModal}
    />
  </DisplayContainer>
);

export default Display;
