import {
  ProductRequest,
  Options,
  ProductResponse,
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
  const additionalRateFixed = Number(additionalRate.toFixed(2));
  return rate + additionalRateFixed;
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

  return rate - negativeRateSum;
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
  (product: Product) => {
    const { rate, options: { isCapitalization } } = product;
    const income = (isCapitalization)
      ? getIncomeWithMonthlyCapitalization(amount, term, rate)
      : getIncomeForSimpleDeposit(amount, rate, term);
    const incomeFixed = Number(income.toFixed(1));
    return { ...product, income: incomeFixed };
  }
);

const clearFieldsInProduct = (product: ProductResponse): Product => {
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
