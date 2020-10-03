import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RangeSlider from './RangeSlider.jsx';
import numeral from 'numeral';

const InterestRateContainer = styled.div`
flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: space-between;
  border-style: solid;
  border-color: transparent;
  border-width: 15px 8px 0px;
}
`;

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  input {
    width: 75px;
  }
`;

const InterestRate = ({
  homePrice,
  interestRate,
  handleInterestChange
}) => {
  const [value, setValue] = useState(interestRate);
  const [max, setMax] = useState(0);

  const handleChange = (e) => {
    let val = e.target.value.replace('%', '');
    if (val === null) {
      val = '';
    }
    e.target.style.setProperty('--webkitProgressPercent', `${(val / max) * 100 - 4}%`);
    handleInterestChange(val);
    setValue(val);
  };

  useEffect(() => {
    setMax(interestRate * 1.5);
  }, []);

  return (
    <InterestRateContainer>
      <TopContainer>
        <h4>Interest Rate</h4>
        <input
          type="text"
          className="money-input"
          value={`${interestRate}%`}
          onChange={handleChange}
        />
      </TopContainer>
      <input
        className="range"
        type="range"
        min="0"
        max={max}
        step=".1"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </InterestRateContainer>
  );
};

export default InterestRate;
