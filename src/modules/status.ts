import { Status } from '../helpers/Status';

type TMappedObj = {
  [key: string]: string;
};

const mappedNamesByApplicationStatus: TMappedObj = {
  [Status.DRAFT]: 'Черновик',
  [Status.IN_PROCESSING]: 'В рассмотрении',
  [Status.OPEN]: 'Открыт'
};

export const getStatusName = (key: string): string => (
  mappedNamesByApplicationStatus[key]
);
