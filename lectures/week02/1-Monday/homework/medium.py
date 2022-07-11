# <!-- 1. Multiply Vectors
# Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example: 
# [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

nL1 = [2, 4, 5]
nL2 = [2, 3, 6]
nL3 = []


for i in range(0, len(nL1)): 
    nL3.append(nL1[i] * nL2[i])

# 2. Matrix Addition
# Given two two-dimensional lists of numbers of the size 2x2 two dimensional list is represented as an list of lists:

# [ [2, -2],
#    [5, 3] ]
# Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

# 1 3
# 2 4
# and

# 5 2 1 0 
# results in
# 6 5
# 3 4

matrix1 = [[1, 3], [2, 4]]
matrix2 = [[5, 2], [1, 0]]
mResults = []
for i in range(0, 2):
    tempList = []
    for j in range(0, 2):
        tempList.append(matrix1[i][j] + matrix2[i][j])
    mResults.append(tempList)

#print(mResults)



# 3. Matrix Addition II
# Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

matrix3 = [[1, 3, 5], [2, 4, 6]]
matrix4 = [[5, 2, 5], [1, 0, 6]]
mResults2 = []
for i in range(0, len(matrix3)):
    tempList = []
    for j in range(0, len(matrix3[0])):
        tempList.append(matrix3[i][j] + matrix4[i][j])
    mResults2.append(tempList)

#print(mResults2)

# 4. De-dup
# Given a list of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.
dup_nums = [9, 8, 6, 9, 8, 6, 1, 2, 3, 1, 1, 4, 5, 6]

no_dup_nums = dup_nums.copy()
no_dup_nums.sort()
curr_val = no_dup_nums[0]
next_val = no_dup_nums[1]
# [1, 1, 1, 2, 3, 4, 5, 6, 6, 6, 8, 8, 9, 9]
#  c
#     n  
   
i = 0
while i < len(no_dup_nums) - 1:
    n = i +1
    
    while i < len(no_dup_nums) - 1 and no_dup_nums[i] == no_dup_nums[i+1]: 
        del no_dup_nums[i+1]
   
    i+=1
print(no_dup_nums)


# 5. Leetspeak
# Given a paragraph of text as a String, print the paragraph in leetspeak (Links to an external site.).

# To translate a String to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

# Letter	Translates To
# A	4
# E	3
# G	6
# I	1
# O	0
# S	5
# T	7
# Example: If your program is given the String "I am a leet programmer", it should print "1 4m 4 l337 pr0gr4mm3r" as the leetspeak translation

paragraph = "I am a leet programmer"

paragraph_list = list(paragraph.lower())

for i in range(len(paragraph_list)): 
    if paragraph_list[i] == 'a':
        paragraph_list[i] = '4'
    elif paragraph_list[i] == 'e':
        paragraph_list[i] = '3'
    elif paragraph_list[i] == 'g':
        paragraph_list[i] = '6'
    elif paragraph_list[i] == 'i':
        paragraph_list[i] = '1'
    elif paragraph_list[i] == 'o':
        paragraph_list[i] = '0'
    elif paragraph_list[i] == 's':
        paragraph_list[i] = '5'
    elif i == 't':
        paragraph_list[i] = '7'
        
paragraph = "".join(paragraph_list)

print(paragraph)

# 6. Long-long Vowels
# Given a word as a string, print the result of extending any long vowels to the length of 5.

# Examples:

# Good => Goooood
# Cheese => Cheeeeese
# Man => Man
# Spoon => Spooooon


word = "Chee   eeese"
#                 | 
word_list = list(word)   
i = 1

while i < len(word_list):
    if word_list[i] == word_list[i-1] and (word_list[i] == 'o' or word_list[i] == 'e') :
        #place vowels before the current
        for x in range(3):
            word_list.insert(i, word_list[i])
        print(word_list, i)
        i+=4 
    else: 
        i+=1

word = "".join(word_list)
print(word)


# 7. Caesar Cipher
# Given a string, print the Caesar Cipher (or ROT13) of the string. What is Caesar Cipher? Learn about it here (Links to an external site.).

# Use your solution to decipher the following text: "lbh zhfg hayrnea jung lbh unir yrnearq" -->


# 3 + 13
# 26 + 13 

coded_string = "lbh zhfg hayrnea jung lbh unir yrnearq"
decoded_string = ""

for c in coded_string:
    # print(ord(c)- 96 + 13)
    
    if (ord(c)+13 - 96) % 26 == 0:
        decoded_string+=chr(96 + ord(c) + 13)
    elif(ord(c)+13 - 96 < 0):
        decoded_string+= " "
    else:
        mod = (ord(c)+13 - 96) % 26
        decoded_string+=chr(mod + 96)
# print(decoded_string)
        



