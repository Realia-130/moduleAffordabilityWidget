import React from 'react';
import styled from 'styled-components';
import Cost from './Cost.jsx';

const CostContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: space-between;
  padding: 16px 0px 16px 16px;

  @media (max-width: 767px) {
    padding: 16px;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 300px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const CustomButton = styled.a`
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 120, 130);
  border-color: transparent;

  &:hover {
    color: rgb(0, 120, 130);
    background-color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;

const CostBreakdown = ({ state, toggleModal }) => {
  const { mortgageIns, principle, propertyTaxes, homeInsurance } = state;

  return (
    <CostContainer>
      <Cost color="rgb(5, 34, 134)" title="Principle & Interest" display={principle} />
      <Cost color="rgb(0, 173, 187)" title="Property Taxes" display={propertyTaxes} />
      <Cost color="rgb(194, 213, 0)" title="Home Insurance" display={homeInsurance} />
      <Cost color="rgb(206, 182, 255)" title="Mortgage ins. & other" display={mortgageIns} />
      <ButtonContainer>
        <CustomButton onClick={toggleModal}>See Today's Mortgage Rates</CustomButton>
      </ButtonContainer>
    </CostContainer>
  )
};

export default CostBreakdown;
