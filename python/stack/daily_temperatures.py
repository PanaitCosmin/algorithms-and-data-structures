# Given an array of integers temperatures represents the daily temperatures, 
# return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
# If there is no future day for which this is possible, keep answer[i] == 0 instead.

def dailyTemp(temperatures: list) -> list:
    # save indexes of the days
    stack = []
    # save the days's distance
    res = [0] * len(temperatures)
    # loop through every temp.
    for i in range(len(temperatures)):
        # if current temp > last saved temp
        while stack and temperatures[i] > temperatures[stack[-1]]:
            # get the index of the highest temp. before the temp[i]
            idx = stack.pop()
            # compute the distance and save it
            res[idx] = i - idx
        # add temp. index
        stack.append(i)

    return res

# testing 
print(dailyTemp([73,74,75,71,69,72,76,73]))
# expected output: [1,1,4,2,1,1,0,0]