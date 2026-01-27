export const getMonthYear = (date) => {
  const d = new Date(date);
  return {
    month: d.toLocaleString('default', { month: 'long' }),
    year: d.getFullYear(),
  };
};
