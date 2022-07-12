
# count from 1-10 

# def print_to_n(n):
#     count = 0 

#     while count < n: 
#         count +=1
#         print(count)

    
def print_upto_n(n):
    
    # base
    if n > 0: 
        print_upto_n(n-1) #recursion
        print(n)
    
print_upto_n(10)

