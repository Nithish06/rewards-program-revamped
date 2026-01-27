import { calculateRewardPoints } from '../utils/rewardCalculator';

test('reward calculation works correctly', () => {
  expect(calculateRewardPoints(120)).toBe(90);
  expect(calculateRewardPoints(100.4)).toBe(50);
  expect(calculateRewardPoints(50)).toBe(0);
  expect(calculateRewardPoints(75)).toBe(25);
});
