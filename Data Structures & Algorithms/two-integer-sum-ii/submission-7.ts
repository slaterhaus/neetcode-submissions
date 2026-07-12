class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = 1;
        while (left < numbers.length - 1) {
            const matches = (numbers[left] + numbers[right]) === target;
            const isDIfferent = numbers[left] !== numbers[right];
            if (matches && isDIfferent) {
                return [left+1, right+1]
            } else if (right === numbers.length -1) {
                left++;
                right = left + 1;
            } else {
                right++;
            }
        }
        return []
    }
}
