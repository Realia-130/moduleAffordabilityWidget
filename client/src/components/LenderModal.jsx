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
  background-color: rgba(0,0,0,.3);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const LendersContainer = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #F9F9F9;
  border-radius: 3px;
  padding: 20px;
  overflow: auto;
  `;

const LenderModal = ({ toggleModal }) => {
  const [lenders, setLenders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLenders = async () => {
      const { data } = await axios.get('http://localhost:5000/lenders');
      console.log(data);
      setLenders(data);
      setLoading(false);
    };
    fetchLenders();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  if (loading) return (<ModalBackground />);

  return (
    <ModalBackground onClick={toggleModal}>
      <LendersContainer onClick={handleClick}>
        <LoanRates
          title="30 YEAR FIXED"
          subTitle="30yr"
          lenders={lenders}
          type="30 year"
        />
        <LoanRates
          title="15 YEAR FIXED"
          subTitle="15yr"
          lenders={lenders}
          type="15 year"
        />
      </LendersContainer>
    </ModalBackground>
  );
}

export default LenderModal