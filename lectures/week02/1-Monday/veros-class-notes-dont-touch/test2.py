def largest(num = []):
    if len(num) == 0: 
        return None

    for i in num:
        if i > num[0]:
            large_num = i
    return large_num

large_num = largest([3, 2, 7, 9, 0])  #0
print(large_num)