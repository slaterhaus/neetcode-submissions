class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
         let left = 0;
         let right = heights.length -1;
         let maxArea = 0;
         while (left < right) {
            const lHeight = heights[left];
            const rHeight = heights[right];
            const height = Math.min(lHeight, rHeight);
            const width = right - left;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
            if (lHeight < rHeight) {
                left++
            } else {
                right--;
            }
         }
         return maxArea;
    }
}
