function isPalindrome (str) {
    if (str !== '' && str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}