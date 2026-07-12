class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a < b ? -1: 1);
        const res: number[][] = [];
        const len = nums.length;
        for (let i = 0; i < len; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let left = i +1;
            let right = nums.length - 1;
            const target = -nums[i];
            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    right--;
                    while (left < right && nums[right] === nums[right+1]) right--
                } else if (sum < target) {
                    left++;
                } else {
                    right--
                }
            }
        }
        return res;
    }
}
