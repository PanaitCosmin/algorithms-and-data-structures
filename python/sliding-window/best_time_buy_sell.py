# Best Time to Buy and Sell Stock

# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

def maxProfit(prices: list) -> int:
    res = 0
    # buy in day one
    lowest = prices[0]
    # loop throush every price in list
    for price in prices:
        # find the lowest price until now
        if price < lowest:
            # update the lowest price
            lowest = price
        # compute the profit 
        profit = price - lowest
        # update the max profit
        res = max(res, profit)

    return res

# testing
print(maxProfit([7, 1, 5, 3, 6, 4]))
# expected output: 5