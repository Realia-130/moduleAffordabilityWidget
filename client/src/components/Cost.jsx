import React from 'react';
import styled from 'styled-components';

const CostContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 3px 0;
`;

const CostDescription = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const ColorRound = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

const Cost = ({ color, title, display }) => (
  <CostContainer>
    <CostDescription>
      <ColorRound color={color} />
      {title}
    </CostDescription>
    <h4>{`$${display}`}</h4>
  </CostContainer>
);

export default Cost;
