class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        
        let left = 0;
        let right = 1;
        let profit = 0;
        let maxProfit = 0;
        while (left < prices.length - 1) {
            profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit);
            if (right === prices.length - 1) {
                left++;
                right = left + 1;
            } else {
                right++;
            }
        }
        return maxProfit;
    }
}
