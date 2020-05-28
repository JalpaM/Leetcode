// reverse Vowels of a string
// leetcode ==> leotcede

function reverseVowels(s) {
    var vowels = 'aeiouAEIOU'.split('');
    s = s.split('');
    let i = 0;
    let j = s.length - 1;

     while(i < j) {
        // if not a vowel then increment counter
        if(vowels.indexOf(s[i]) === -1) {
            i++;
            continue;
        }

        // if not a vowel then increment counter
        if(vowels.indexOf(s[j]) === -1) {
            j--;
            continue;
        }

        // if vowel then swap element
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s.join('');
}
