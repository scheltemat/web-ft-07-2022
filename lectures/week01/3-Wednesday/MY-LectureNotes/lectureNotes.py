# hello
#? Strings 

"I am a string."

'I am a string too.'

'I\'m a string and I have to escape my single quote.'

"I'm a string and I have a single quote."

"""
I am a string
and I can span
multiple lines!
"""

#? Concatenating Strings

'abc' + 'def'

#? Escaping Characters 

'I am one line.\nI am another line'
'I am one line.\bI went back one space'
'I am one line.\tI horizontal spacing'
'I am one line.\nI new line'
'I am one line.\n\vI new line with vertical spacing'

#? Integers and Floats 

5 # integer 
5.6 # float 

# mixed type will be converted to a float
8 +  1.0 # result 9.0

8.0 / 3 # you get 2.666666

#? Calculating with Python 

20 + 3650 

8 * 3.57

5 + 30 * 20

#? The Order of Operations

((5 + 30) * 20) / 10

5 + 30 * 20 / 10

#? More Arithmetic

5    //    2   #        2             division    w/o    decimal    
5    %    2    #      1               modulus/remainder    
5    **    3    #      125              exponentiation


#? Variables 

name = "Veronica"

found_coins = 20
magic_coins = 10
stolen_coins = 3

found_coins + magic_coins * 365 - stolen_coins * 52    #3514

#? String Formatting

"Hello {} {}".format(first_name, last_name)


"Hello {0} {1}, again {0}".format(first_name, last_name)


"Hello {first} {last}, again {first}".format(first=first_name, last=last_name)

#? f-strings 

param1 = 'first'
param2 = 'second'
f'Parameters {param1}:{param2}'

#? type() 

type(5)   #int 
type(5.3)  # float 
type('word') # str 
is_raining = False 
type(is_raining) # bool

#? isintance()

isinstance(5, int)  # True 
isinstance('5', int) # False 
isinstance('5', str)  #True

#? Why do data types matter ?

a_string    =    '1'    
an_int    =    2    
a_string    +    an_int

#? print()

print('Hello')
print('World')

print('One', 'Two', 'Three')

print('One'),
print('Two'),
print('Three')

#? Math Functions

2*3
1 + 1
3 - 2
8 / 4
abs(-5)
pow(2, 2)
round(5.5)

#? input()

input()
name = input("What's your name?")

#? int()

# implicit int to float

5 + 5.4  # 10.4 - Implicit int to float 

#? Explicit str to int 

string = '45'
num = int(string)

int('blah')  # error 

age = int(input("What's your age? "))

#? Comparison Operators

5 > 4 # True
9 < 5 # False
7 >= 9 # False
4 <= 8 # True

#? Logical Operators 

a = True
b = False
print(('a and b is',a and b))
print(('a or b is',a or b))
print(('not a is',not a))

# if 

age = 25 
if (age == 25):
  print(age)
name = "Veronica"
if (name == "Veronica"):
  print(name)
if (age <= 25):
  print(age)
if (age != 25):
  print(age)
if (age < 25):
  print(age)
  
#? if-else 

if age >= 21:
  print("You get free beer")
else:
  print("Sorry no beer for you")
  
#? elif 

if age >= 21:
  print("You get free beer")
elif age < 18:
  print("What are you even doing here?")
else:
  print("Sorry no beer for you")
  
#? while

count = 0
while count < 10:
  count += 1
  print("The count is", count)
print("Done")

# While Loops: Checking Input
answer = ''
while answer != 'when':
  answer = input('Say when: ')
  answer = answer.lower()
print("Cheese")


#? Assignment
x    =    5                 #    sets variable    x    to    5    
x    +=    3             #    increment    x    by    3    
x    -=    2             #    decrement    x    by    2    
x *= 5          # x = x * 5
x /= 5          # x = x / 5
x %= 5          # x = x % 5
x //= 5          # x = x // 5
x **= 5          # x = x ** 5
x &= 5          # x = x & 5
x |= 5          # x = x | 5
x ^= 5          # x = x ^ 5
x >>= 5          # x = x >> 5
x <<= 5          # x = x << 5

#? while break

while True:
  answer = input('Say when: ')
  if answer.lower() == 'when':
    break
print("Cheese")





















