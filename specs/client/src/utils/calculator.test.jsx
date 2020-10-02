import { calculatePercentDown, calculateAmountDown } from '../../../../client/src/utils/calculator.jsx';

describe('Calculator', () => {
  describe('calculatePercentDown', () => {
    it('Should return the percent down', () => {
      const result = calculatePercentDown(1000000, 200000);
      expect(result).toBe(20);
    });
  });

  describe('calculateAmountDown', () => {
    it('Should return the amount down', () => {
      const result = calculateAmountDown(1000000, 20);
      expect(result).toBe(200000);
    });
  });
});
