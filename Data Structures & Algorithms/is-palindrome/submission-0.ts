class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
    let left = 0;
  let right = s.length - 1;

  const isAlphaNum = (c: string): boolean =>
    /[0-9a-zA-Z]/.test(c);

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNum(s[right])) {
      right--;
    }

    const cLeft = s[left].toLowerCase();
    const cRight = s[right].toLowerCase();

    if (cLeft !== cRight) {
      return false;
    }

    left++;
    right--;
  }

  return true;
    }
}
