import { Statuses } from '../app/types/applicationTypes';
import { TMappedObjToStr } from '../app/types';

export const statusLabels: TMappedObjToStr = {
  [Statuses.DRAFT]: 'Черновик',
  [Statuses.IN_PROCESSING]: 'В рассмотрении',
  [Statuses.REJECT]: 'Отклонен',
  [Statuses.OPEN]: 'Открыт'
};
