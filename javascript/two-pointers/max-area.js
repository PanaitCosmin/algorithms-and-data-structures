// Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height) {
    let res = 0
    // create two pointers at start & end array
    let [left, right] = [0, height.length - 1]
    // loop through array
    while(left < right) {
        // compute the area
        const area = (right - left) * Math.min(height[left], height[right])
        // save the higher area
        res = Math.max(res, area)
        // finds the next largest element
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return res
}

// testing 
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // exprected output: 49