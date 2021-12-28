type MappedObjWithSymbols = {
  [key: string]: string;
};

const mappedSymbolsByCurrency: MappedObjWithSymbols = {
  rub: '₽',
  usd: '$'
};

export const getCurrencySymbol = (key: string): string => mappedSymbolsByCurrency[key];
