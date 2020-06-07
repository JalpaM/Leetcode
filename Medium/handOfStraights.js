// 846. Hand of Straights
/*
Alice has a hand of cards, given as an array of integers.
Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.
Return true if and only if she can.

Example 1:
Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].

Example 2:
Input: hand = [1,2,3,4,5], W = 4
Output: false
Explanation: Alice's hand can't be rearranged into groups of 4.

Constraints:
1 <= hand.length <= 10000
0 <= hand[i] <= 10^9
1 <= W <= hand.length
Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
*/
var isNStraightHand = function(hand, W) {
    let N = hand.length;
    if (N === 0) return true;
    if (N % W !== 0) return false;

    // sort the hand O(n*log(n))
    hand.sort((a, b) => a - b);

    //create freqMap O(N)
    const freqMap = new Map();
    hand.forEach(card => {
        if (!freqMap.has(card)) freqMap.set(card, 0);

        freqMap.set(card, freqMap.get(card) + 1);
    });

    // loop over sorted hand and create groups at the size of W
    // O(N*W)
    for (let i = 0; i < N; i++) {
        let card = hand[i];
        let cardFreqVal = freqMap.get(card);
        if (cardFreqVal > 0) {
            freqMap.set(card, cardFreqVal - 1);
            let groupIndex = 1;
            while(groupIndex < W) {
               let nextCard = card + groupIndex;
               if (freqMap.has(nextCard) && freqMap.get(nextCard) > 0) {
                   freqMap.set(nextCard, freqMap.get(nextCard) - 1);
                   ++groupIndex;
               } else {
                   return false;
               }
            }
        }
    }

    return true;
};
