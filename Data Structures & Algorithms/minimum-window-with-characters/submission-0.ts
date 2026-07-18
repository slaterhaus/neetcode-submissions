class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length === 0 || s.length === 0) return "";

        const need = new Map<string, number>();
        for (const ch of t) {
            need.set(ch, (need.get(ch) ?? 0) + 1);
        }

        const window = new Map<string, number>();

        let have = 0; // how many chars currently meet required count
        const needCount = need.size; // distinct chars we care about

        let resStart = 0;
        let resLen = Infinity;

        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            // add current char to window
            window.set(ch, (window.get(ch) ?? 0) + 1);

            // if this char is needed and we've just met its required count, increment have
            if (need.has(ch) && window.get(ch)! === need.get(ch)!) {
                have++;
            }

            // while window is valid (contains all required counts), try to shrink it
            while (have === needCount) {
                const windowLen = right - left + 1;
                if (windowLen < resLen) {
                    resLen = windowLen;
                    resStart = left;
                }

                const leftChar = s[left];
                // remove char at left from window
                window.set(leftChar, window.get(leftChar)! - 1);

                // if this char is needed and we just went below its required count, window is no longer valid
                if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
                    have--;
                }

                left++; // shrink from the left
            }
        }

        return resLen === Infinity ? "" : s.slice(resStart, resStart + resLen);
    }
}
