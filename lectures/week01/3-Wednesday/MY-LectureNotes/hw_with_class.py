

coin_tally = 0 

print("You have 0 coins.")

give_coin = input("Would you like a coin?")

while give_coin == "yes":
    coin_tally +=1
    print(f"You have {coin_tally} coins")
    give_coin = input("Do you want another?")
    
else: 
    print("Bye")