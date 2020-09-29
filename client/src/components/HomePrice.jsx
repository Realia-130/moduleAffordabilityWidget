import React, { useState } from 'react';
import styled from 'styled-components';
import RangeSlider from './RangeSlider.jsx';

const HomePriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: space-between;

  border-style: solid;
  border-color: transparent;
  border-width: 16px 8px 0px;
}
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

const HomePrice = ({ homePrice }) => {
  const [value, setValue] = useState(homePrice);
  const [fill, setFill] = useState(75);
  const max = homePrice * 1.5;
  const handleChange = (e) => {
    setValue(e.target.value);
    setFill((e.target.value / max) * 100);
  };

  const styles = {
    background: `linear-gradient(to right,
      rgb(0, 120, 130) 0%,
      rgb(0, 120, 130) ${fill}%,
      rgb(205, 209, 212) ${fill}%,
      rgb(205, 209, 212) 100%)`,
  };

  return (
    <HomePriceContainer>
      <TopContainer className="top-container">
        <h4>Home Price</h4>
        <input type="text" className="money-input" />
      </TopContainer>
      <input style={styles} className="range" type="range" min="0" max={max} step="10" value={value} onChange={handleChange} />
      {/* <RangeSlider min={0} max={1500000} /> */}
    </HomePriceContainer>
  );
};

export default HomePrice;