// 253. Meeting Rooms II
/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Example 2:
Input: [[7,10],[2,4]]
Output: 1
*/
// Time Complexity: O(n)
var minMeetingRooms = function(intervals) {
    let n = intervals.length;
    let start = [], end = [];

    intervals.forEach(interval => {
        start.push(interval[0]);
        end.push(interval[1]);
    });

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let i = 0, j = 0, meeting = 0, res = 0;

    while(i < n) {
        if(start[i] < end[j]) {
            meeting++;
            i++;
        } else {
            meeting--;
            j++;
        }

        res = Math.max(res, meeting);
    }

    return res;
};
