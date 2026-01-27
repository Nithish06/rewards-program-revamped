export const getMonthYearKey = date => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}`;
};

export const getMonthYearLabel = date => {
  const d = new Date(date);
  return {
    month: d.toLocaleString("default", { month: "long" }),
    year: d.getFullYear()
  };
};
