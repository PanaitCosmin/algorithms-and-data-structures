# Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

# Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

# Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

# Return the minimum integer k such that she can eat all the bananas within h hours.
import math

def minEatingSpeed(piles: list, h: int) -> int:
    # initialize 2 pointers for the min and max no. of babanas to eat
    left, right = 1, max(piles)
    # initialze the best eating speed
    res = right
    # loop through the no. of potential eating speed
    while left <= right:
        # create a middle eating speed
        k = (left + right) // 2
        # initialze var. for the potential hours taken to eat
        hours_taken = 0
        # calculate the hours taken with the speed k
        for pile in piles:
            hours_taken += math.ceil(pile / k)
        # if the speed is valid search for a slower one
        if hours_taken <= h:
            # update the speed
            res = min(res, k)
            # move to lower numbers
            right = k - 1
        else :
            # move to higher numbers
            left = k + 1
    
    return res

# testing
print(minEatingSpeed([3,6,7,11], 8))
#expected output: 4
print(minEatingSpeed([30,11,23,4,20], 5))
#expected output: 30