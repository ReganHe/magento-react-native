/**
 * Created by Dima Portenko on 14.05.2020
 */
import { useSelector } from 'react-redux';

export const useCurrency = props => {
  const { currencyRate, currencySymbol } = useSelector(state => {
    const {
      currency: {
        displayCurrencySymbol: currencySymbolValue,
        displayCurrencyExchangeRate: currencyRateValue,
      },
    } = state.magento;

    return {
      currencyRate: currencyRateValue,
      currencySymbol: currencySymbolValue,
    };
  });

  return { currencyRate, currencySymbol };
};
