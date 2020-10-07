import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const LenderContainer = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #D1D1D5;
  font-weight: 200;
  transition: all .05s;
  cursor: pointer;

  &:hover {
    background-color:#F5F6F7;
  }
`;

const LenderInfo = styled.div`
  flex: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-left: 20px;
  color: #596B82;

  div {
    padding: 3px 0;
  }
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

const ArrowContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  padding-right: 25px;
`;

const Arrow = styled.i`
  border: solid #10A75F;;
  border-width: 2px 2px 0 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
`;

const Tooltip = styled.span`
  cursor: help;
  border-bottom: 1px dashed #A7A6AB;
`;

const GreenLink = styled.span`
  color:#10A75F;
  cursor: pointer;
  font-weight: 100;
`;

const Lender = ({ loan, lender, type }) => {
  console.log('loan, ', loan);
  console.log('lender ', lender);
  const ratingTotal = lender.reviews.reduce((a, review) => a + review.rating, 0);
  const ratingAverage = Math.floor(ratingTotal / lender.reviews.length);
  console.log(ratingAverage);

  return (
    <LenderContainer>
      <LenderInfo>
        <div>{`${type} fixed`}</div>
        <div><GreenLink>{lender.name}</GreenLink></div>
        <div>
          <StarRating rating={ratingAverage} />
          {`${lender.reviews.length} Reviews`}
        </div>
      </LenderInfo>
      <Quotes>
        <div><span className="bold">{`${loan.apr} %`}</span> APR</div>
        <div><span className="bold">{`${loan.rate} %`}</span> RATE</div>
        {/* <div><span className="bold">$706</span> <Tooltip>/MO.</Tooltip></div> */}
        <div>
          <span className="bold">
            {`$${loan.fees}`}
          </span>
          <Tooltip>
            LEENDER FEES
          </Tooltip>
        </div>
      </Quotes>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </LenderContainer>
  );
};

export default Lender;
