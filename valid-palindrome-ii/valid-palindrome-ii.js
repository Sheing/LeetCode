/**
* @param {string} s
* @return {boolean}
*/

/**
 * Runtime: 80 ms, faster than 84.07% of JavaScript online submissions for Valid Palindrome II.
 * Memory Usage: 43.4 MB, less than 25.00% of JavaScript online submissions for Valid Palindrome II.
 */

var validPalindrome = function(s) {
    
    var availableDeleteCount = 1;
    
    var validatePalindrome = function(s){
         //using two pointers
        let leftPointer = 0;
        let rightPointer = s.length -1;
        while(leftPointer < rightPointer){
            //Check 1st condition
            if(s[leftPointer] !== s[rightPointer]){
                //Check 2nd condition with deleting/ignoring one character
                if(availableDeleteCount !== 0){
                    availableDeleteCount --;
                     return (leftPointer === 0 && rightPointer === s.length -1 ) 
                            ? validatePalindrome(s.slice(1))  || validatePalindrome(s.slice(0, s.length-1))
                            : validatePalindrome(s.slice(0, leftPointer) + s.slice(leftPointer + 1, s.length)) 
                                || validatePalindrome(s.slice(0, rightPointer) + s.slice(rightPointer + 1, s.length))
                }
                return false;
            }
            leftPointer ++;
            rightPointer --;
        }
        
        return true;
    }
    
    return  validatePalindrome(s);
};

