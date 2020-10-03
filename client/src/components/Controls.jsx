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

const Controls = ({
  homePrice,
  handlePriceChange,
  handleDownPaymentChange,
  handlePercentDownChange,
  state,
  downPayment,
  interestRate,
  handleInterestChange,
  handleLoanTypeChange,
}) => (
    <ControlsContainer>
      <HomePrice homePrice={homePrice} handlePriceChange={handlePriceChange} />
      <DownPayment
        homePrice={homePrice}
        state={state}
        downPayment={downPayment}
        handleDownPaymentChange={handleDownPaymentChange}
        handlePercentDownChange={handlePercentDownChange}
      />
      <InterestRate
        homePrice={homePrice}
        interestRate={interestRate}
        handleInterestChange={handleInterestChange}
      />
      <LoanType handleLoanTypeChange={handleLoanTypeChange} />
    </ControlsContainer>
  );

export default Controls;
