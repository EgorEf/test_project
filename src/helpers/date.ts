const getNowDate = () => new Date();

export const getCreatedAtDate = (): string => {
  const date = getNowDate();
  return date.toString();
};
