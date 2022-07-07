

# bill_amount = float(input("enter your bill amount: "))

# level_of_service = int(input(""" How was your service?
                             
#     1. Good: 20%
#     2. Fair: 15%
#     3. Bad: 10%

# """))

# if level_of_service == 1 :
#     tip_amount = bill_amount * 0.2
# elif level_of_service == 2 :
#     tip_amount = bill_amount * 0.15
# elif level_of_service == 3 :
#     tip_amount = bill_amount * 0.1
# else:
#     tip_amount = "this is not a valid tip amount"
    
# print(f"Tip amount: ${tip_amount}")
# print(f"Your total bill is: ${bill_amount + tip_amount}")












# bill_amount = float(input("enter your bill amount: "))

# level_of_service = int(input("""How was your service?
                             
#     1. Good: 20%
#     2. Fair: 15%
#     3. Bad: 10%

# """))

# if level_of_service == 1 :
#     tip_amount = bill_amount * 0.2
# elif level_of_service == 2 :
#     tip_amount = bill_amount * 0.15
# elif level_of_service == 3 :
#     tip_amount = bill_amount * 0.1
# else:
#     tip_amount = "this is not a valid tip amount"

# people_split = int(input("How many people are splitting the check?: "))
    
# print(f"Tip amount: ${tip_amount}")
# print(f"Your total bill is: ${bill_amount + tip_amount}")
# print(f"The amount per person is: ${(bill_amount + tip_amount) / people_split}")










# coins = 0 

# while True:
#     response = input(f"""You have {coins} coins.
#       Do you want another?
#       yes/no
#       """)
    
#     if response == "yes":
#         coins +=1
#     elif response == "no":
#         break 
#     else:
#         print("Invalid response")

# print("Bye") 







# width = int(input("What is the width? "))
# height = int(input("What is the height? "))

# i = 0 
# while i < height:
#     if i == 0 or i == height - 1:
#         print("*" * width)
#     else:
#         print("*" + " " * (width - 2) + "*")
#     i +=1







# height = int(input("What is the height? "))

# i = 0
# while i < height:
#     # print((height - 1) * " " + "*" * (2(i + 1)- 1) + (height - 1) * " ")
#     # print((height - i) * ' ' + (1 + 2*i) * '*' + (height - i) * ' ')
#     print((height - i) * " " + (2 * (i + 1) - 1) * "*" + (height - i) * " ")
#     i +=1