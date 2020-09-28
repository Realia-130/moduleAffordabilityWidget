import React from 'react';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import Display from './components/Display.jsx';

const AppContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Controls />
    <Display />
  </AppContainer>
);

export default App;
