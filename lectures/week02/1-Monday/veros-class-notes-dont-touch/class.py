
# Defined Function


# print("Day 1: Students in SRE class")
# Function()

# print("Day 2: Students in SRE class")
# Function

# print("Day 3: Students in SRE class")
# Function

# my_list = [1, 2, 3, 4]

# for x in my_list :
#     print(x)
    
# print("Day 3: Students in SRE class")
# Function  
    
# num = 3   
    
# def greeting(): 
    
#     print('hello world')
    
    
# greeting()  # calling or invoking a function
# greeting()  # calling or invoking a function
# greeting()  # calling or invoking a function
# greeting()  # calling or invoking a function
# print('calling a function')
# greeting()  # calling or invoking a function

# def separateRuns():
#     print('******************')
#     print()

# def getGroceries():
#     print('milk')
#     print('flour')
#     print('sugar')
#     print('butter')
#     separateRuns()
    
    
# getGroceries()
# getGroceries()


# def add(num1, num2): 
#     # num1 = 5 
#     # num2 = 4 
#     sum = num1 + num2 
#     print(sum)
    
# def add5(): 
#     num1 = 5 
#     num2 = 5 
#     sum = num1 + num2 
#     print(sum)
    
# def add55(): 
#     num1 = 5 
#     num2 = 55 
#     sum = num1 + num2 
#     print(sum)
    

# add(5, 4)
# add(5, 5)
# add(5, 55)

# def make_formal_greeting(name, title):
    
#     print(f"This is {name}, the {title}!") 
    

# make_formal_greeting("Christian", "Student")
# make_formal_greeting("Student", "Christian")


# def addTwo(startingValue): 
#     endingValue = startingValue + 2 
#     print(f'The sum of the starting value + 2  is {endingValue}')



# addTwo(6)


# def add(num1, num2):
    
#     sum = num1 + num2
#     return  sum
    
    

# sum_nums = add(5, 6)

# print(sum_nums)


# def square(num):
#     answer = num * num 
#     return answer
    
    
# square3 = square(3)

# print(square3)

# list_of_nums = [1, 2,3 , 4, 5, 6]
# #                        |
# new_list = []

# def evenNums(lst_nums):
#     # temp_list = [] #[2, 4, 6]
#     for num in lst_nums: 
#         if num % 2 == 0: 
#             lst_nums.append(num)
    
#     return lst_nums
            

# new_list = evenNums(list_of_nums.copy())

# print(new_list)
        
    
    
# def myFun(p1, p2, p3): 
#     return p1*2, p2*2, p3*2


# var1, var2, var3 = myFun(3, 4, 5)

# print(var1, var2, var3)


# def greeting(fName, lName): 
    
#     return f'My name is {fName} {lName}'


# result = greeting(lName="Lino", fName="Veronica")
# result = greeting("Lino", "Veronica")

# print(result)


# def sayHello(name):
#     print('Hello')
#     return
#     print(name)
    

# sayHello('Austin')
    
    
# import random

# def getAnswer(answerNumber):
#     if answerNumber == 1:
#         return 'It is certain'
#     elif answerNumber == 2:
#         return 'It is decidedly so'
#     elif answerNumber == 3:
#         return 'Yes'
#     elif answerNumber == 4:
#         return 'Reply hazy try again'
#     elif answerNumber == 5:
#         return 'Ask again later'
#     elif answerNumber == 6:
#         return 'Concentrate and ask again'
#     elif answerNumber == 7:
#         return 'My reply is no'
#     elif answerNumber == 8:
#         return 'Outlook not so good'
#     elif answerNumber == 9:
#         return 'Very doubtful'
    
#     print('end of function')
    
# r = random.randint(1, 9)
# fortune = getAnswer(11)
# print(fortune)



# def addTwo(startingValue):
#     endingValue = startingValue + 2
#     print('The sum of', startingValue, 'and 2 is:', endingValue)
#     return endingValue

# result = addTwo(5)
# print(result)

# global_var = "global"
# local_var = "global"

# def scope():
#     local_var = "local"
#     print(local_var)
#     some_fun()
    
   
# def some_fun():
#     print('some function')
#     # print(local_var)
# # print(local_var) # can't access
# scope()


# TAX_RATE = .09  # 9 percent tax
# COST_PER_SMALL_WIDGET = 5.00
# COST_PER_LARGE_WIDGET = 8.00

# PI = 3.14


# def calculateCost(nSmallWidgets, nLargeWidgets):
#     subTotal = (nSmallWidgets * COST_PER_SMALL_WIDGET) + (nLargeWidgets * COST_PER_LARGE_WIDGET)
#     taxAmount = subTotal * TAX_RATE
#     totalCost = subTotal + taxAmount
    
#     return totalCost


# total1 = calculateCost(4, 8)  #  4 small and 8 large widgets
# print('Total for first order is', total1)
# total2 = calculateCost(12, 15)



# def takeShower():

#     return "Showering"

# def eatBreakfast():
#     meal = sorted  #oatmeal
#     return f"Eating {meal}"

# def cookFood():
#     foodList = ["Oatmeal", "eggs", "chicken"]
    
#     return foodList[0]

# def wakeUp():
#     val = takeShower()
    
#     eat = eatBreakfast()
#     cookFood()
    
#     print("let's go to work")
#     return val


# global_var = "global"

# wakeUp()


# def some_fun():
    
#     some_fun()
    
    
# some_fun()


# Write a function called power which accepts a base and an exponent. 

def power(base, exponent): 
    
    # base
    if(exponent == 0):
        return 1; 

    return base * power(base, exponent - 1)


power(3, 2)

# call stack

# 3 * power(3, 1) ==> 3 * 3





# 3 * power(3, 0) ==> 3 * 1
# power(3, 0) ==> 1





    

