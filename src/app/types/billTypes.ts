export type TBill = {
  id: number,
  userId: number,
  currency: string,
  numBill: string
};

export type TBillRequest = {
  userId: number,
  currency: string
};
