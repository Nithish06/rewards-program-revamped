export const calculateRewardPoints = (amount) => {
  const value = Math.floor(amount);

  if (value <= 50) return 0;
  if (value <= 100) return value - 50;

  return (value - 100) * 2 + 50;
};
