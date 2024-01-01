// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
    let res = 0
    // create pointers for the first and second day
    let [left, right] = [0, 1]
    // iterate through array
    while(right < prices.length) {
        // find a day with lower price than the next one
        if (prices[left] < prices[right]) {
            // calculate the profit
            const profit = prices[right] - prices
            [left]
            // update the profit
            res = Math.max(res, profit)
        } else {
            // move the buy day
            left = right
        }
        // move the sell day
        right++
    }

    return res
}

// testing
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// expected output: 5