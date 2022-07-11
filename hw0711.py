# Find smallest number in a list


def smallest(numList):
    small = numList[0]
    for i in numList:
        if i < small:
            small = i
    return small
       
numList = [6, 5, 7, 0, 8]
print(f"smallest in {numList} is {smallest(numList)}")


# Find largest number in a list

def largest(numList):
    large = numList[0]
    for i in numList:
        if i > large:
            large = i
    return large

print(f"largest in {numList} is {largest(numList)}")


# Find the shortest string in a list of strings

def shortestString(strList):
    small = strList[0]
    for i in strList:
        if len(i) < len(small):
            small = i
    return small

strList = ['hello', 'hi', 'bye', 'goodbye']
print(f"shortest in {strList} is {shortestString(strList)}")

# Find the longest string in a list of strings

def longestString(strList):
    large = strList[0]
    for i in strList:
        if len(i) > len(large):
            large = i
    return large

print(f"longest in {strList} is {longestString(strList)}")

# 1. Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.

def power(base, exponent):
    if exponent == 0:
        return 1
    return base * power(base, exponent - 1)
    
    # return base * power(exponent - 1)

print(power(3, 3))
