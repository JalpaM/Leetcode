//Time complexity: O(N)

function caesarCipher(str, shift) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let res = [];

    for(var char of str) {
        const charIndex = alphabets.indexOf(char);  // getting index

        if(charIndex === -1) {  //charIndex will be -1 for other than alphabets i.e. numbers or special characters
            res += char;
            continue;   // it will break only for that character but doesn't go out of function
        }

        let shiftedChar = (charIndex + shift) % 26;  // 26 alphabets ==> 100 % 26 = 22
        res += alphabets[shiftedChar];
    }

    return res;
}

console.log(caesarCipher('yz', 2)); // ab
console.log(caesarCipher('abcd', 100)); //wxyz
console.log(caesarCipher('abcd 56 hijk 32 qrs', 100)); //wxyz 56 defg 32 mno
