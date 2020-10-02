import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LoanRates from './LoanRates.jsx';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const LendersContainer = styled.div`
  height: 90vh;
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #F9F9F9;
  border-radius: 8px;
  padding: 20px;
  `;

const LenderModal = () => {
  const [lenders, setLenders] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(async () => {
  //   const { data } = await axios.get('/lenders');
  //   setLenders(data);
  //   setLoading(false);
  // }, []);

  // if (loading) return (<div>Loading...</div>);

  return (
    <ModalBackground>
      <LendersContainer>
        {console.log(lenders)}
        <LoanRates></LoanRates>
      </LendersContainer>
    </ModalBackground>
  );
}

export default LenderModal