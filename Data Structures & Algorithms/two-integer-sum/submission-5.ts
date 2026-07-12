class Solution {
  twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>(); // value -> index

    for (let i = 0; i < nums.length; i++) {
      const val = nums[i];
      const complement = target - val;

      if (seen.has(complement)) {
        return [seen.get(complement)!, i];
      }
      seen.set(val, i);
    }
    return [];
  }
}