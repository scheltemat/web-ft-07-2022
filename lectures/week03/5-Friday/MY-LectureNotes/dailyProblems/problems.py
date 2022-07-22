# Return a new list with each element multiplied by 5

nums = [56, 34, 34, 1, 1, 1, 23, 12, 89, 89, 89, 70, 56] 
new_nums = []

for i in nums:
    new_nums.append(i * 5)
print(new_nums)

# Given a list [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this {'job': 'Instructor', 'name': 'Elie'} (the order does not matter).

lst = [("name", "Elie"), ("job", "Instructor")]

result = dict(lst)
print(result)
