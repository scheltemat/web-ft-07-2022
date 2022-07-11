# 1. Sum the Numbers
# Create a list of numbers, print their sum.
arr1 = [4, 2, 5, 7, 23, 6, 5]
#       |
sum = 0 

for val in arr1: 
    # sum = sum + val
    sum += val
    
# print(sum)

# 2. Largest Number
# Create a list of numbers, print the largest of the numbers.
arr2 = [4, 2, 53, 7, 23, 6, 5]
#                           |

max = arr2[0] # 4 

for val in arr2:
    if val > max: # 5  > 53
        max = val # max = 53
        
# print(max)

# 3. Smallest Number
# Create a list of numbers, print the smallest of the numbers.
arr3 = [4, 2, 5, 7, 23, 6, 5]
#             |

min = arr3[0] # 4

for val in arr3: 
    if val < min: #5 < 2
        min = val # min = 2

# 4. Even Numbers
# Create a list of numbers, print each number in the list that is even.
arr4 = [4, 2, 5, 7, 23, 6, 5]
#                          |
result = []  # append  [4, 2, 6]
# %   5/2 1 0 

for val in arr4: 
    if (val % 2) == 0: # 5%2 == 0
        result.append(val)
# print(result)

# 5. Positive Numbers
# Create a list of numbers, print each number in the list that is greater than zero.
arr5 = [4, 2, -5, 7, -23, 6, -5]


for val in arr5: 
    if val >= 0: 
        # print(val)
        pass
# print(posNums)

# 6. Positive Numbers II
# Create a list of numbers, create a new list which contains every number in the given list which is positive.
arr6 = [4, 2, 5, 7, 23, 6, 5]

posNums = []

for val in arr6: 
    if val >= 0: 
        posNums.append(val)
# print(posNums)
       
# 7. Multiply a list
# Create a list of numbers, and a single factor (also a number), create a new list consisting of each of the numbers in the first list multiplied by the factor. Print this list.

m = 4
arr7 = [4, 2, 5, 7, 23, 6, 5]

mult_list = [] # [16,8, 20, 28, 92, 24, 20 ]

for val in arr7: 
    temp = val * 4
    mult_list.append(temp)
    
#print(mult_list)

# 8. Reverse a String
# Given a string, print the string reversed.

myName = "Veronica"
#           | 

rev_string = "" #   reV

for c in myName: 
    rev_string = c + rev_string
    
print(rev_string)
    

