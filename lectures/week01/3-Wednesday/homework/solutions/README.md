## Python 101

#### 1. Tip Calculator

Your task is to write a program that calculates how much of a tip to leave at a restaurant.

Prompt the user for two things:

- The total bill amount
- The level of service, which can be one of the following: good, fair, or bad

Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

- good -> 20%
- fair -> 15%
- bad -> 10%

**Solution**

```python
totalBill = int(input("Total bill amount? "))
service = input("Was the service 'good', 'fair', or 'bad'? ")
tip = 0

if service == "good":
    tip = totalBill * 0.2
elif service == "fair":
    tip = totalBill * 0.15  
else:
    tip = totalBill * 0.1
print("Tip amount: {:.2f}".format(tip))
```



#### 2. Tip Calculator 2

Allow the ability to divide the check into a equal parts amount a number of people. The user will enter the number of people to be divided amongst. Example session:

```
$ python3 tip_calc2.py
Total bill amount? 100
Level of service? good
Split how many ways? 5
Tip amount: $20.00
Total amount: $120.00
Amount per person: $24.00
```

**Solution**

```python
totalBill = int(input("Total bill amount? "))
service = input("Was the service 'good', 'fair', or 'bad'? ")
split = int(input("Split how many ways? "))
tip = 0

if service == "good":
    tip = totalBill * 0.2
elif service == "fair":
    tip = totalBill * 0.15  
else:
    tip = totalBill * 0.1
print("Tip amount: {:.2f}".format(tip))    
print("Total amount: {:.2f}".format(tip + totalBill))
print("Amount per person: {:.2f}".format((tip + totalBill) / split)) 

```

#### 3. How many coins?

Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program. Example run:

**Solution**

```python
coins = 0
another_coin = ''
print("You have 0 coins.")
while True:
    another_coin = input("Do you want another? ")
    if another_coin == "yes":
        coins += 1
        print(f"You have {coins} coins.")
    elif another_coin == "no":
        print("Bye")
        break
```

#### 4. Print a Box

Given a height and width, input by the user, print a box consisting of * characters as its border. Example session:

```
$ python3 box.py
Width? 6
Height? 4
******
*    *
*    *
******
```

**solution**
```python
user_wide = int(input("How many wide?: "))
user_tall = int(input("How many tall?: "))
a = "*"
x = " "

print (a*(user_wide))
counter = 0
while (counter < user_tall -2):
    print(a,x*(user_wide-4),a)
    counter+= 1
print (a*(user_wide))
```

#### 5. Print a Triangle

Print a triangle consisting of * characters like this:

```
   *
  ***
 *****
*******
```

**solution**

```python
height = int(input("Enter a height? "))
count = 0
stars = 1
width_size = height * 2 - 1

while count < height:
    star = '*' * stars
    count += 1
    stars += 2
    print(star.center(width_size))
```

#### 6. Multiplication Table

Print the multiplication table for numbers from 1 up to 10. Example output:

```
$ python3 multiplication_table.py
1 X 1 = 1
1 X 2 = 2
1 X 3 = 3
1 X 4 = 4
...
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
...
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
```

**Solution**
```python
i = 1
j = 1

while i <= 10:
    while j<= 10: 
        print(f'{i} X {j} = {i*j}')
        j+=1
    j=1
    i+=1
```