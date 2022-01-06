export const baseUrl = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3001/'
  : 'https://my-json-server.typicode.com/EgorEf/fake-server/';

export const getDepositApplicationPath = (id: number): string => `/depositApplication/${id}`;
export const getNewDepositApplicationPath = (id: number): string => `/depositApplication/new/${id}`;
