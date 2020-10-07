import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalStyles from './GlobalStyles.jsx';
import Header from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import Display from './components/Display.jsx';
import LenderModal from './components/LenderModal.jsx';
import {
  calculateAmountDown,
  calculatePercentDown,
  calcPropTax,
  calcPrinciple,
  calcPayment,
  calcMortgageIns,
} from './utils/calculator.jsx';

const AppContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
`;

class Affordability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanType: 244,
      homePrice: null,
      payment: null,
      downPayment: null,
      percentDown: 0.2,
      interestRate: 2.94,
      principle: null,
      propertyTaxes: null,
      homeInsurance: 75,
      mortgageIns: 0,
      loading: true,
      error: null,
      showModal: false,
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
    this.handlePercentDownChange = this.handlePercentDownChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleLoanTypeChange = this.handleLoanTypeChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  async componentDidMount() {
    const randomIndex = Math.floor(Math.random() * 100);
    const { data } = await axios.get(`http://localhost:5000/homes/${randomIndex}`);
    this.handlePriceChange(data.price);
  }

  handlePriceChange(homePrice) {
    const {
      percentDown,
      mortgageIns,
      interestRate,
      loanType,
    } = this.state;

    const downPayment = calculateAmountDown(homePrice, percentDown);
    const propTax = calcPropTax(homePrice);
    const principle = calcPrinciple(
      homePrice,
      downPayment,
      interestRate,
      loanType,
    );
    const payment = calcPayment(principle, propTax, mortgageIns);

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
    const {
      homePrice,
      mortgageIns,
      propertyTaxes,
      downPayment,
      loanType,
    } = this.state;

    const principle = calcPrinciple(homePrice, downPayment, interestRate, loanType);
    const payment = calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      payment,
      interestRate,
    });
  }

  handleDownPaymentChange(downPayment) {
    const {
      homePrice,
      propertyTaxes,
      loanType,
    } = this.state;

    const percentDown = calculatePercentDown(homePrice, downPayment);
    const principle = calcPrinciple(homePrice, downPayment, percentDown, loanType);
    const mortgageIns = calcMortgageIns(percentDown, homePrice, downPayment);
    const payment = calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      mortgageIns,
      principle,
      payment,
      downPayment,
      percentDown,
    });
  }

  handlePercentDownChange(percentDownRaw) {
    const percentDown = percentDownRaw / 100;
    const {
      homePrice,
      propertyTaxes,
      interestRate,
      loanType,
    } = this.state;

    const downPayment = calculateAmountDown(homePrice, percentDown);
    const principle = calcPrinciple(homePrice, downPayment, interestRate, loanType);
    const mortgageIns = calcMortgageIns(percentDown, homePrice, downPayment);
    const payment = calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      mortgageIns,
      principle,
      payment,
      downPayment,
      percentDown,
    });
  }

  handleLoanTypeChange(loanType) {
    const {
      homePrice,
      downPayment,
      interestRate,
      propertyTaxes,
      mortgageIns,
    } = this.state;

    const principle = calcPrinciple(homePrice, downPayment, interestRate, loanType);
    const payment = calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      loanType,
      payment,
    });
  }

  toggleModal(e) {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { payment, homePrice, interestRate, percentDown, downPayment, principle, loading, propertyTaxes, mortgageIns, showModal } = this.state;

    if (loading) return (<div>Loading...</div>);

    return (
      <>
        <GlobalStyles />
        <AppContainer>
          <Header payment={payment} />
          <Controls
            homePrice={homePrice}
            handlePriceChange={this.handlePriceChange}
            handleDownPaymentChange={this.handleDownPaymentChange}
            handlePercentDownChange={this.handlePercentDownChange}
            handleInterestChange={this.handleInterestChange}
            handleLoanTypeChange={this.handleLoanTypeChange}
            state={this.state}
            downPayment={downPayment}
            interestRate={interestRate}
          />
          <Display
            homePrice={homePrice}
            state={this.state}
            toggleModal={this.toggleModal}
          />
          {showModal && <LenderModal toggleModal={this.toggleModal} />}
        </AppContainer>
      </>
    );
  }
}

export default Affordability;
