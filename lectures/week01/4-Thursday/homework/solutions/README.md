# Solutions Decision Making & Iterative Programming


## Caesar

```python
secret = "Lbh zhfg hayrnea, jung lbh unir yrnearq."
# secret = "hello"
offset = 13
alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = ''

for char in secret:
    ascii_code = ord(char)
    is_uppercase = ascii_code >= 65 and ascii_code <= 90
    char = char.lower()
    if char not in alphabet:
        new_char = char
    else:
        idx = alphabet.find(char)
        new_idx = idx + offset
        if new_idx > 25:
            new_idx = new_idx - 26
        new_char = alphabet[new_idx]
        if is_uppercase:
            new_char = new_char.upper()
    result += new_char

print(result)
```
## Box

```python
width = int(input('Width? '))
height = int(input('Height? '))

# draw the top border
print('*' * width)

# draw the middle
num_spaces = width - 2
spaces = ' ' * num_spaces
for i in range(height - 2):
    print('*' + spaces + '*')

# draw the bottom border
print('*' * width
```
## Factor

```python
number = int(input("Enter a number: "))
last = number
divisor = 1

left = []
right = []

while (last > divisor):
    if(number % divisor == 0):
        last = number / divisor
        if (last == divisor):
            left.append(divisor)
        else:
            left.append(divisor)
            right.insert(0,last)
    divisor += 1
print(left + right)
```
## Factor 2

```python
number = int(input("Enter a number: "))
last = number
divisor = 1

while (last > divisor):
    if(number % divisor == 0):
        last = number / divisor
        if (last == divisor):
            print(divisor)
        else:
            print(divisor)
            print(last)
    divisor += 1
```
## Factor 3

```python
n = int(input("what's the number?"))

for i in range(1, n):
   if n % i == 0:
       print(str(n/i)))

print("1")
```
## Leetspeek

```python
word = input('The word: ').upper()

# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7

word = word.replace('A', '4')
word = word.replace('E', '3')
word = word.replace('G', '6')
word = word.replace('I', '1')
word = word.replace('O', '0')
word = word.replace('S', '5')
word = word.replace('T', '7')

print(word)
```
## Leetspeek

```python
word = input('The word: ').upper()

result = ''

# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7

for char in word:
    result_char = char
    if result_char == 'A':
        result_char = '4'
    if result_char == 'E':
        result_char = '3'
    if result_char == 'G':
        result_char = '6'
    if result_char == 'I':
        result_char = '1'
    if result_char == 'O':
        result_char = '0'
    if result_char == 'S':
        result_char = '5'
    if result_char == 'T':
        result_char = '7'
    result = result + result_char


print(result)
```
## Long Vowels

```python
word = 'cheese'

word = word.replace('ee', 'eeeee')
word = word.replace('oo', 'ooooo')

print(word)
```
## Long Vowels 2

```python
word = 'cheese'

long_vowels = ['oo', 'ee']

result = ''
for i in range(len(word)):
    twoletters = word[i:i+2]
    if twoletters in long_vowels:
        result += word[i] * 4
    else:
        result += word[i]

print(result)
```
## Matrix 

```python
x = [[1,5,4],[2,3,6],[4,8,9]]
y = [[2,9,3],[4,8,1],[5,7,6]]

r = []

for i in range(len(x)):
    n = []
    for j in range(len(x)):
        z = 0
        for k in range(len(x)):
            xx = x[k]
            yy = y[j]
            z += xx[j] * yy[k]
        n.append(z)
    r.append(n)

print(r)
```



