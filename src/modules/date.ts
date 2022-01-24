import moment from 'moment';

const FORMAT_TIME = 'DD.MM.YYYY';

const getCreatedAt = (): string => moment().format(FORMAT_TIME);
const getClosedAt = (createdAt: string, term: number): string => (
  moment(createdAt, FORMAT_TIME).add(term, 'days').format(FORMAT_TIME)
);
const getTimeStampFromDate = (dateStr: string): number => moment(dateStr, FORMAT_TIME).unix();

export const date = {
  getCreatedAt,
  getClosedAt,
  getTimeStampFromDate
};
