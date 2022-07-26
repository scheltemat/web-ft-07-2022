


#1. Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"])

new_list = ["Elie", "Tim", "Matt"]
result = []

for i in new_list:
    result.append(i[0])
    print(result)

#2. Print out the numbers 1-10 from the list below
nums = [
    {"num": 1},
    {"num": 2},
    {"num": 3},
    {"num": 4},
    {"num": 5},
    {"num": 6},
    {"num": 7},
    {"num": 8},
    {"num": 9},
    {"num": 10},
]

for num in nums:
    print(num["num"])

#3. Given two lists ["CA", "NJ", "RI"] and ["California", "New Jersey", "Rhode Island"] return a dictionary that looks like this {'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}

abbreviations = ["CA", "NJ", "RI"] 
state_names = ["California", "New Jersey", "Rhode Island"]
new_dict = {}

for j in range(len(abbreviations)):
    new_dict[abbreviations[j]] = state_names[j]
print(new_dict)

#4. see colorsProblems.py