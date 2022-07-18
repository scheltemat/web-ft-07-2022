
import pickle


try:
    with open('phonebook.pickle', 'rb') as fh:
        phonebook = pickle.load(fh)
except:
    phonebook = {}

def spacer():
    print('')
    
def list_entries():
    count = 1
    for key, value in phonebook.items():
        print(f"""
              name: {key}
              phone number: {value}""")
             
def look_up():
    name = input(f"Who are you looking for? ")
    number = phonebook[name]
    if name in phonebook:
        print(f"""
              Contact Found
              name: {name}
              phone number: {number}""")
    else:
        print(f"'{name}' does not exist in phonebook")
        spacer()
    

def set_entry():
    name = input(f"name? ")
    number = input(f"phone number? ex. 000-000-0000 ")
    phonebook[name] = number
    spacer()
    print(f"Entry stored for {name}")
    
def delete_entry():
    name = input(f"who would you like to delete? ")
    del phonebook[name]
    spacer()
    print(f"Entry for {name} has been deleted")
    
def quit():
    print("Goodbye.")
    with open('phonebook.pickle', 'wb') as fh:
        pickle.dump(phonebook, fh)
   
def main():
    while True:
        response = input("""
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit

What do you want to do (1-5)? """)
        
        if response == '1':
            look_up()
            
        elif response == '2':
            set_entry()
        
        elif response == '3':
            delete_entry()
        
        elif response == '4':
            list_entries()
        
        elif response == '5':
            quit()
            break
        
        else:
            print(f"""
                '{response}' is not a valid entry, please try again.
                """)

main()