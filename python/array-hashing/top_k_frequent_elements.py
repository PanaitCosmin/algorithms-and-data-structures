# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

def topKFrequent(nums: list, k: int) -> list:
    countNumbers = {}
    freq = [[] for i in range(len(nums) + 1)]
    res = []

    # count the frequency of numbers
    for num in nums:
        countNumbers[num] = 1 + countNumbers.get(num, 0)
    
    # create array with freq of no. as index
    for key,val in countNumbers.items():
        freq[val].append(key)

    # search through array for the most k freq elements
    for i in range(len(freq) - 1, 0, -1):
        for num in freq[i]:
            if k < 1: break
            res.append(num)
            k -= 1
    
    return res


# testing
print(topKFrequent([1,1,1,2,2,3], 2))
