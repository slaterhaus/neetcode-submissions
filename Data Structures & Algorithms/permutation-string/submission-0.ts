class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const n1 = s1.length;
        const n2 = s2.length;
        if (n1 > n2) return false;

        const need = new Map<string, number>();
        const window = new Map<string, number>();

        // build freq for s1
        for (const ch of s1) {
            need.set(ch, (need.get(ch) ?? 0) + 1);
        }
        // console.log(need)

        // initial window in s2
        for (let i = 0; i < n1; i++) {
            const ch = s2[i];
            window.set(ch, (window.get(ch) ?? 0) + 1);
        }
        // console.log(window)

        const same = (): boolean => {
            if (need.size !== window.size) return false;
            for (const [ch, cnt] of need) {
                if (window.get(ch) !== cnt) return false;
            }
            return true;
        };

        if (same()) return true;

        // slide window
        for (let r = n1; r < n2; r++) {
            const add = s2[r];
            const rem = s2[r - n1];
            console.log(r, add, r-n1, rem)

            // add new right char
            window.set(add, (window.get(add) ?? 0) + 1);

            // remove left char
            const remCount = (window.get(rem) ?? 0) - 1;
            if (remCount === 0) window.delete(rem);
            else window.set(rem, remCount);

            if (same()) return true;
        }

        return false;
    }
}
