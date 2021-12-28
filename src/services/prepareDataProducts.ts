import {
  ProductRequest,
  Options,
  ProductResponse,
  ProductBase,
  Product
} from '../app/types';

const getFixedNum = (num: number, numbersAfterPoint: number): number => (
  Number(num.toFixed(numbersAfterPoint))
);

const getRateByTerm = (
  startPeriod: number,
  periodStep: number,
  rateStep: number,
  rate: number,
  term: number
): number => {
  const steps = Math.floor((term - startPeriod) / periodStep);
  const additionalRate = steps * rateStep;
  const resultRate = rate + additionalRate;
  return getFixedNum(resultRate, 2);
};

const getConfigurabledRateByOptions = (rate: number, options: Options) => {
  const { isEarlyRepayment, isPartial } = options;

  let negativeRateSum = 0;
  if (isEarlyRepayment) {
    negativeRateSum += 0.7;
  }

  if (isPartial) {
    negativeRateSum += 0.35;
  }

  const resultRate = rate - negativeRateSum;
  return getFixedNum(resultRate, 2);
};

const filterByMinAmount = (amount: number) => ({ minAmount }: ProductResponse) => (
  amount >= minAmount
);

const filterByEntryInPeriod = (term: number) => (
  ({ period: [start, end] }: ProductResponse): boolean => (term >= start && term <= end)
);

const getRateForProduct = (term: number) => (product: ProductResponse): ProductResponse => {
  const {
    period,
    periodStep,
    rateStep,
    rate,
    options
  } = product;

  const [start] = period;
  const termRate = getRateByTerm(start, periodStep, rateStep, rate, term);
  const configurabledRateByOptions = getConfigurabledRateByOptions(termRate, options);
  return { ...product, rate: configurabledRateByOptions };
};

const getIncomeForSimpleDeposit = (amount: number, term: number, rate: number) => (
  (amount * rate * (term / 365)) / 100
);

const getIncomeWithMonthlyCapitalization = (amount: number, term: number, rate: number) => {
  const termDepositInMonths = Math.floor(term / 30);
  return (amount * (1 + (rate / 100) / 12) ** termDepositInMonths) - amount;
};

const getIncomeForProduct = (amount: number, term: number) => (
  (product: ProductBase): Product => {
    const { rate, options: { isCapitalization } } = product;
    const income = (isCapitalization)
      ? getIncomeWithMonthlyCapitalization(amount, term, rate)
      : getIncomeForSimpleDeposit(amount, rate, term);
    const incomeFixed = getFixedNum(income, 2);
    return { ...product, income: incomeFixed };
  }
);

const clearFieldsInProduct = (product: ProductResponse): ProductBase => {
  const {
    periodStep,
    rateStep,
    minAmount,
    ...preparedProduct
  } = product;
  return preparedProduct;
};

export const getPreparedDataProducts = (
  products: ProductResponse[],
  { amount, term }: ProductRequest
): Product[] => (
  products
    .filter(filterByMinAmount(amount))
    .filter(filterByEntryInPeriod(term))
    .map(getRateForProduct(term))
    .map(clearFieldsInProduct)
    .map(getIncomeForProduct(amount, term))
);
