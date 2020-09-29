import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import Display from './components/Display.jsx';

const AppContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
`;

const App = () => {
  const [homePrice, setHomePrice] = useState(1000000);
  const [payment, setPayment] = useState(homePrice * 0.005);

  return (
    <AppContainer>
      <Header payment={payment} />
      <Controls homePrice={homePrice} />
      <Display />
    </AppContainer>
  );
};

export default App;
