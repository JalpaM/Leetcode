// Trains are coming and leaving from a station on sometime. Train doesn't need to wait for coming to station.
// How many stations are required to handle the situation?

// Input:
// [['08:30', '09:00'], ['08:00', '09:00'], ['07:30', '10:00'], ['02:30', '09:00'], ['11:30', '11:45']]

// Output: 4
var stations = times => {
    let start = [];
    let end = [];
    let n = times.length;

    times.forEach(time => {
        start.push(new Date(`01/01/2020 ${time[0]}`));
        end.push(new Date(`01/01/2020 ${time[1]}`));
    })

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let i = 0, j = 0, stations = 0, res = 0;

    while(i < n) {
        if(start[i] < end[j]) {
            i++;
            stations++;
        } else {
            j++;
            stations--;
        }

        res = Math.max(res, stations);
    }

    return res;
}
