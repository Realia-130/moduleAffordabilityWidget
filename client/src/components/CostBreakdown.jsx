import React from 'react';
import styled from 'styled-components';
import Cost from './Cost.jsx';

const CostContainer = styled.div`
  flex: 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: space-between;
  padding: 16px 0px 16px 16px
`;

const CostBreakdown = ({ state }) => {
  const { mortgageIns, principle, propertyTaxes, homeInsurance } = state;

  return (
    <CostContainer>
      <Cost color="rgb(5, 34, 134)" title="Principle & Interest" display={principle} />
      <Cost color="rgb(0, 173, 187)" title="Property Taxes" display={propertyTaxes} />
      <Cost color="rgb(194, 213, 0)" title="Home Insurance" display={homeInsurance} />
      <Cost color="rgb(206, 182, 255)" title="Mortgage ins. & other" display={mortgageIns} />
    </CostContainer>
  )
};

export default CostBreakdown;
