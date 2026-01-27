import { calculateRewardPoints } from "../utils/rewardCalculator";

describe("Reward Calculator – Edge Case Testing", () => {

  test("returns 0 points for amount below or equal to 50", () => {
    expect(calculateRewardPoints(0)).toBe(0);
    expect(calculateRewardPoints(10)).toBe(0);
    expect(calculateRewardPoints(50)).toBe(0);
  });

  test("returns correct points between 50 and 100", () => {
    expect(calculateRewardPoints(51)).toBe(1);
    expect(calculateRewardPoints(75)).toBe(25);
    expect(calculateRewardPoints(99)).toBe(49);
    expect(calculateRewardPoints(100)).toBe(50);
  });

  test("returns correct points above 100", () => {
    expect(calculateRewardPoints(120)).toBe(90);
    expect(calculateRewardPoints(150)).toBe(150);
    expect(calculateRewardPoints(200)).toBe(250);
  });


  test("floors decimal values correctly", () => {
    expect(calculateRewardPoints(100.9)).toBe(50);
    expect(calculateRewardPoints(120.7)).toBe(90);
    expect(calculateRewardPoints(75.99)).toBe(25);
  });


  test("returns 0 for negative values", () => {
    expect(calculateRewardPoints(-10)).toBe(0);
    expect(calculateRewardPoints(-100)).toBe(0);
  });

  test("returns 0 for non-number inputs", () => {
    expect(calculateRewardPoints(null)).toBe(0);
    expect(calculateRewardPoints(undefined)).toBe(0);
    expect(calculateRewardPoints("100")).toBe(0);
    expect(calculateRewardPoints(NaN)).toBe(0);
  });


  test("handles very large transaction values", () => {
    expect(calculateRewardPoints(1000)).toBe(1850);
    expect(calculateRewardPoints(10000)).toBe(19850);
  });
});
