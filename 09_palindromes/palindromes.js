const palindromes = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[\W_]+/g,"")
    if (s.length == 1) {
        return true;
    } else if (s.length == 0) {
        return false;
    }
    let back = 1;
    for (let i = 0; i <= s.length / 2; i++) {
        if (s.charAt(i) != s.charAt(s.length-back)) {
            return false;
        }
        back ++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;


