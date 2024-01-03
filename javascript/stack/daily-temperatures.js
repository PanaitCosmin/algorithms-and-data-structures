// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

function dailyTemp(temperatures) {
    // save indexs of days
    const stack = []
    // save the day's distance
    const res = new Array(temperatures.length).fill(0)
    // loop through every index temperature
    for (let i = 0; i < temperatures.length; i++) {
        // find a temp[i] > temp[i-1]
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length -1]]) {
            // get the index of the highest temp. before the temp[i]
            const idx = stack.pop()
            // compute the distance and save it
            res[idx] = i - idx
        }
        // add temperatures indexs
        stack.push(i)
    }

    return res
}

// testing
console.log(dailyTemp([73, 74, 75, 71, 69, 72, 76, 73]))