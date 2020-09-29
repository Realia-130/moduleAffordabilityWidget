import React, { useState } from 'react';
import styled from 'styled-components';

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

  const handleChange = (e) => setValue(e.target.value);

  return (
    <HomePriceContainer>
      <TopContainer>
        <h4>Home Price</h4>
        <input type="text" className="money-input" />
      </TopContainer>
      <input className="range" type="range" min="0" max="1500000" step="10" value={value} onChange={handleChange} />
    </HomePriceContainer>
  );
}

export default HomePrice;