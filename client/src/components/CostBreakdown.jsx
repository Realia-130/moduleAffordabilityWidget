import React from 'react';
import styled from 'styled-components';
import Cost from './Cost.jsx';

const CostContainer = styled.div`
  flex: 2;
`;

const CostBreakdown = ({ homePrice }) => (
  <CostContainer>
    <Cost color="rgb(5, 34, 134)" title="Principle & Interest" homePrice={homePrice} />
    <Cost color="rgb(0, 173, 187)" title="Property Taxes" homePrice={homePrice} />
    <Cost color="rgb(194, 213, 0)" title="Home Insurance" homePrice={homePrice} />
    <Cost color="rgb(206, 182, 255)" title="Mortgage ins. & other" homePrice={homePrice} />
  </CostContainer>
);

export default CostBreakdown;