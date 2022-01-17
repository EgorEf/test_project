export const uniqueId = (): number => {
  const milliseconds = Date.now();
  const uniqueIdStr = milliseconds.toString().slice(-6);
  return Number(uniqueIdStr);
};
