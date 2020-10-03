import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

const HomePriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: space-between;

  border-style: solid;
  border-color: transparent;
  border-width: 15px 8px 0px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  input {
    width: 112px;
  }
`;

const HomePrice = ({ homePrice, handlePriceChange }) => {
  const [value, setValue] = useState(homePrice);
  const [max, setMax] = useState(0);
  const formatPrice = numeral(homePrice).format('0,0');

  const handleChange = (e) => {
    let targetVal = e.target.value;

    if (targetVal[0] === '$') {
      const pureVal = targetVal.slice(1);
      targetVal = numeral(pureVal).value();
    }

    e.target.style.setProperty('--webkitProgressPercent', `${(targetVal / max) * 100 - 4}%`);
    setValue(targetVal);
    handlePriceChange(targetVal);
  };

  useEffect(() => {
    setMax(homePrice * 1.5);
  }, []);

  return (
    <HomePriceContainer>
      <TopContainer className="top-container">
        <h4>Home Price</h4>
        <input
          type="text"
          className="money-input"
          value={`$${formatPrice}`}
          onChange={handleChange}
        />
      </TopContainer>
      <input
        className="range"
        type="range"
        min="0"
        max={max}
        step="10"
        value={value}
        onChange={handleChange}
      />
    </HomePriceContainer>
  );
};

export default HomePrice;
