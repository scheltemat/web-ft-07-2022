
# day1 = "Sunday"
# day2 = "Monday"
# day3 = "Tuesday"
# day4 = "Wednesday"
# day5 = "Thursday"
# day6 = "Friday"
# day7 = "Saturday"


names = []
days = ["Sunday", "Monday", "Tuesday"]
#         0          1         2


# print(days[2])

# num_days = len(days)

# print(num_days)
## ACcess, updates, delete, create


# Updating 
# days[1] = "Friday"

# print(days)
# print(days)

# days.append("Thursday")

# print(days)


# index = 0

# while index < len(todos): # 2 < 5 
#     print(todos[index]) # todos[2]
#     index+=1 # index = index + 1


# len_todos = len(todos)

# print(todos)
# todos.append('check mail')
# print(todos)

# print(len_todos)


# nums = [4, 2, 7, 2, 9, 12, 67, 34, 2]
#          |
#                3

# sum

# index = 0 
# sum = 0 

# while index < len(nums): #9 < 9
#     sum += nums[index]
#     index +=1

# print(sum)
# # max num 

# index = 1 
# max_num = nums[0]

# while index < len(nums):
#     if nums[index] > max_num: 
#         max_num = nums[index]
#     index+=1
        
# print(max_num)
    
    
# min num


todos = ["pet the cat", "go to work", "shop for groceries", 
 "go home", "feed the cat"]

# 1. pet the cat 
# 2. go to work 
# 3. shop for groceries 
# 4. go home

# ask user if they want to add a todo list item

#! we'll be back here
# running = True
# while running:
#     # print out menu
#     index = 0
#     while index < len(todos):
#         print(f' {index+1}. {todos[index]}')
#         index +=1
        
#     keep_running = input('Do you want to add an item? Y or N >> ')
    
#     if(keep_running.lower() == 'n'): 
#         running = False
#     else: 
#         # ask for and input
#         new_todo = input('enter a new todo >>')
#         # append it to our list 
#         todos.append(new_todo)



# list1 = [1, 2, 3, 4, 5]

# list2 = [6, 7, 8, 9, 10]

# lists = list1 + list2 

# print(lists)

#? extend 

# list1.extend(list2)  #mutate list1 

# print(list1)

# nums = [2, 5, 7, 8, 4, 4]

#       0  1  2  3  4  5

# print(nums)
# del nums[2]
# print(nums)

# del nums[2:5]

# print(nums)

# nums = [2, 5, 7, 8, 4, 4]
#       0  1  2  3  4  5

# num_subset = nums[0:2]

# print(num_subset)

# nums.insert(3, 99)

# print(nums)

# removed_num = nums.pop()

# print(removed_num)

# nums = [2, 5, 7, 8, 4, 4]

# index = nums.index(8)

# print(index)

# nums.sort()

# print(nums)

# nums.clear()

# print(nums)


# a = 1 

# b = a

# a = 4

# print(a)  # 4
# print(b)  # 1

# c = [1, 2, 3, 4]
# d = c.copy() 



# c.append(99)
# c[0] = 98

# print(c)  # [98, 2, 3, 4, 99]
# print(d)  # [1, 2, 3, 4]

# pass by reference 
# pass by value 


# list1 = [1, 2,3]

# print(list1 * 3)

#nums = [1, 2, 3, 4, ]
# nums[0]
# multi_list = [
    
#     [1, 2, 3, 4, [3, 4]], 
#     [3, 4, 5, 6]
# ]

# print(multi_list[0][4][0]) #[1, 2, 3, 4]

#[[],[],[],[]]

a = [ [2, 4, 6, 8 ],  
    [ 1, 3, 5,  ],  
    [ 8, 6, 4, 2 ],  
    [ 7, 5, ] ] 


# a[1][1]
# outer_index = 0 
# inner_index = 0  

# while outer_index < len(a): # 0: [2, 4, 6, 8]
#                             #             |
#     # print(a[outer_index])
    
#     while inner_index < len(a[outer_index]):
#         print(a[outer_index][inner_index])
#         inner_index +=1
        
#     inner_index = 0
#     outer_index +=1


# [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
#   i

# [[], [], []]
#      o

#[]

# outer_index = 0
# inner_index = 0

# big_list = [] 

# while outer_index < 3: # 3
    
#     temp_lst = [] # []
#     while inner_index < 3: # 0 ,1 ,2 
#         temp_lst.append(inner_index) # [0, 1, 2]
#         inner_index+=1
        
#     big_list.append(temp_lst) # [[0,1,2], [0,1,2]]
#     inner_index = 0
#     outer_index+=1
    
# print(big_list)
# blst = []

# blst.append([0,1,2])   

# print(lst)     
    
    
    






    
        



# lst = [0,1,2]
# i = 0
# nlst = []
# while i < 3:
#     nlst.append(lst)
#     i+=1
    

# min = 1 
# sec = 1 

# while min < 5 : 
#     print(f"min: {min}")
#     while sec < 4: 
#         print(f">>> sec: {sec}")
#         sec+=1
    
#     sec = 1
#     min+=1

    


# my_str = "hello"
# #          |

# print(my_str[3:])


# alphabet = "abcdefghijklmnopqrstuvwxyz"

# print(alphabet[-1])

# char_index = 0 

# # while char_index < len(alphabet): 
# #     print(alphabet[char_index])
# #     char_index+=1 


# rev = alphabet[::-1]

# print(rev)

# alphabet = "abcdefghijklmnopqrstuvwxyz"
# char_index = 0
# rev_alph = ''
# while char_index < len(alphabet): 
    
#     rev_alph = alphabet[char_index] + rev_alph # "dcba"
#     char_index+=1 
    
# print(rev_alph)

# greeting = "hello"  # str  ['h', 'e', 'l', 'l', 'o']

# greeting_list = list(greeting)

# greeting_list[0] = "9"

# print(greeting_list)
# greeting = "".join(greeting_list)

# print(greeting)

# print(greeting)
# greeting[0] = 9


# word = "mountain"
# arr = "1, 2, 3"
# word_lst = ["hello", "there", "world"]

# word_lst.extend(arr)

# print(word_lst)

# reverse number  -1234

# -4321

# nums = [1, 2, 3, 4]

# nums.reverse()

# print(nums)

# rev_nums = "".join(nums)


# reverse number  -1234

# -4321


# num = 1234 

# sign = 1 

# if (num < 0):
#     sign = -1

# num_str = str(abs(num))  # "1234"
# rev_num_str = "" 
# index = 0

# while index < len(num_str):  
#     rev_num_str = num_str[index] + rev_num_str 
#     index+=1 
    
# num = int(rev_num_str) * sign
# print(num)

# rng = list(range(6, 17, 2))  # [3, 6, 9, 12, ]

# print(rng)

# lists, ranges, strings

# range
# [3, 5, 7, 9]
#  |   |
for x in range(3,11, 2): 
    
    print(x)
 
 
# list   
nums = [99, 45, 23, 12, 11]

for n in nums:
    print(n) 
    

# strings 

name = "Ryan"

for char in name:
    print(char) 
    
    
    
    
    


