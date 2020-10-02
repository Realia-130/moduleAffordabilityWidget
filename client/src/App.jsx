import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import Display from './components/Display.jsx';
import * as calc from './utils/calculator.jsx';

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
      homePrice: null,
      payment: null,
      downPayment: null,
      percentDown: 0.2,
      interestRate: 2.94,
      principle: null,
      propertyTaxes: null,
      homeInsurance: 75,
      mortgageIns: 200,
      loading: true,
      error: null,
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
    this.handlePercentDownChange = this.handlePercentDownChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
  }

  componentDidMount() {
    this.handlePriceChange(1400000);
  }

  handlePriceChange(homePrice) {
    const downPayment = calc.calculateAmountDown(homePrice, this.state.percentDown);
    const propTax = calc.calcPropTax(homePrice);
    const principle = calc.calcPrinciple(homePrice, downPayment, this.state.interestRate, 244);
    const payment = calc.calcPayment(principle, propTax, this.state.mortgageIns);
    const percentDown = calc.calculatePercentDown(homePrice, downPayment);

    this.setState({
      homePrice,
      propertyTaxes: propTax,
      principle,
      payment,
      downPayment,
      loading: false,
    });
  }

  handleInterestChange(interestRate) {
    console.log('Here');
    const { homePrice, mortgageIns, propertyTaxes, downPayment } = this.state;
    const principle = calc.calcPrinciple(homePrice, downPayment, interestRate, 244);
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      payment,
      interestRate,
    });
  }

  handleDownPaymentChange(downPayment) {
    const { homePrice, mortgageIns, propertyTaxes } = this.state;
    const percentDown = calc.calculatePercentDown(homePrice, downPayment);
    const principle = calc.calcPrinciple(homePrice, downPayment, percentDown, 244);
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      payment,
      downPayment,
      percentDown,
    });
  }

  handlePercentDownChange(percentDown) {
    percentDown = percentDown / 100;
    const { homePrice, mortgageIns, propertyTaxes, interestRate } = this.state;
    const downPayment = calc.calculateAmountDown(homePrice, percentDown);
    const principle = calc.calcPrinciple(homePrice, downPayment, interestRate, 244);
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      payment,
      downPayment,
      percentDown,
    });
  }

  render() {
    const { payment, homePrice, interestRate, percentDown, downPayment, principle, loading, propertyTaxes, mortgageIns } = this.state;

    if (loading) return (<div>Loading...</div>);

    return (
      <AppContainer>
        <Header payment={payment} />
        <Controls
          homePrice={homePrice}
          handlePriceChange={this.handlePriceChange}
          handleDownPaymentChange={this.handleDownPaymentChange}
          handlePercentDownChange={this.handlePercentDownChange}
          handleInterestChange={this.handleInterestChange}
          state={this.state}
          downPayment={downPayment}
          interestRate={interestRate}
        />
        <Display
          homePrice={homePrice}
          state={this.state}
        />
      </AppContainer>
    );
  }
}

export default App;
