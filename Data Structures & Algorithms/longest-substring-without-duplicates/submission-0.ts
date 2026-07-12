class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charSet = new Set<string>();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
        }
            charSet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
