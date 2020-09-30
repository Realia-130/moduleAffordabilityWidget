import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanType: '30-year fixed',
      homePrice: 1400000,
      payment: 10000,
      downPayment: 700000,
      percentDown: 0.2,
      interestRate: 2.94,
      principle: 11363,
      propertyTaxes: 1896,
      homeInsurance: 75,
      mortgageInsurance: 0,
    };
  }

  calculate() {
    //home price effects principle, payment, taxes and downpayment
    // 30 year rate payment % = .005
    // interest rate effects prinicple and payment total only
    // downpayment effects payment and principle and mortgage ins only
    // principle === .84 of payment
    // taxes === .14 of payment
    // home insureance is $75 flat
    // mortgage ins === .07 of payment, only if down payment is less than 20%
  }

  render() {
    const { payment, homePrice } = this.state;
    if (!homePrice) return (<div>Loading...</div>);

    return (
      <AppContainer>
        <Header payment={payment} />
        <Controls homePrice={homePrice} />
        <Display homePrice={homePrice} />
      </AppContainer>
    );
  }
}

export default App;
