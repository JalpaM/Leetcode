// Time complexity: O(n^2)
function stringCount(long, short) {
    let count = 0;
    //loop over long
    for(let i = 0; i < long.length; i++) {

        //loop over short
        for(let j = 0; j < short.length; j++) {

            //break loop for short if character doesn't match in long string
            if(short[j] !== long[i + j]) break;  //compare small string index with index of long string
            //continue loop over long if character matches
            //increment count if smaller string has complete match in long string
            if(j === short.length - 1) count++;
        }
    }

    //return count
    return count;
}

stringCount('hedhj rutvijhello hello', 'hello') //2
