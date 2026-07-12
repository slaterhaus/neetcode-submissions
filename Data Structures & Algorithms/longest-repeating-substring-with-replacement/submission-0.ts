class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = {};
        let left = 0, maxFreq = 0, result = 0;
        for (const [i, char] of Object.entries(s)) {
            const right = Number(i)
            count[char] = (count[char] ?? 0) + 1;
            maxFreq = Math.max(maxFreq, count[char]);
            while ((right - left + 1) - maxFreq > k) {
                const leftChar = s[left];
                count[leftChar]--;
                left++;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}
