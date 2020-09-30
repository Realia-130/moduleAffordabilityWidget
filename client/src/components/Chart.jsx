import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  width: 280px;
  margin: 0 20px;
`;

const Chart = () => (
  <ChartContainer>
    <svg width="100%" height="100%" viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(5, 34, 134)" stroke-width="3.8" stroke-dasharray="85 15" stroke-dashoffset="25" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(0, 173, 187)" stroke-width="3.8" stroke-dasharray="8 92" stroke-dashoffset="40" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(194, 213, 0)" stroke-width="3.8" stroke-dasharray="5 95" stroke-dashoffset="32" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(206, 182, 255)" stroke-width="3.8" stroke-dasharray="2 98" stroke-dashoffset="27" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" />
    </svg>
  </ChartContainer>
);

export default Chart;
