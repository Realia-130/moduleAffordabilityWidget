import React from 'react';
import styled from 'styled-components';

const LenderContainer = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #D1D1D5;
  font-weight: 200;
`;

const LenderInfo = styled.div`
  flex: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-left: 20px;
`;

const Quotes = styled.div`
flex: 2;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: flex-start;
height: 100%;
font-size: 11px;
color: #596B82;
margin-left: 10px;

div {
  padding: 2px 0;
}
`;

const Arrow = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  padding-right: 25px;
`;

const Tooltip = styled.span`
  cursor: help;
  border-bottom: 1px dashed #A7A6AB;
`;

const Lender = () => {

  return (
    <LenderContainer>
      <LenderInfo>
        <div>30 Year Fixed</div>
        <div>Random Lender</div>
        <div>***** 1033 Reviews</div>
      </LenderInfo>
      <Quotes>
        <div><span className="bold">2.921 %</span> APR</div>
        <div><span className="bold">2.921 %</span> RATE</div>
        <div><span className="bold">$706</span> <Tooltip>/MO.</Tooltip></div>
        <div><span className="bold">$506</span> <Tooltip>LEENDER FEES</Tooltip></div>
      </Quotes>
      <Arrow>></Arrow>
    </LenderContainer>
  );
};

export default Lender;
