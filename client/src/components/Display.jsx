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
  //padding: 20px;
  margin-top: 30px;
`;

const Display = ({ homePrice }) => (
  <DisplayContainer>
    <Chart />
    <CostBreakdown homePrice={homePrice} />
  </DisplayContainer>
);

export default Display;
