class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const sArr = s.split('').sort();
        const tArr = t.split('').sort();

        for (const char in sArr) {
            if (sArr[char] !== tArr[char]) return false
        }
        return true;
    }
}
