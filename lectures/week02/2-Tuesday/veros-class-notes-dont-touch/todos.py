
todos = ["pet the dog", "check the mail", "cook dinner"] #global variable 
name = input('What is your name >>')

def print_todos(name=""):
    count = 1
    
    print(f'Hello {name}!')
    for todo in todos:
        print("%d. %s" % (count, todo))
        count += 1


def add_todo():
    your_response = input(f"What would you like to add? >> ")
    todos.append(your_response)
    print_todos(name)


def replace_todo():
    your_response = int(input(f"Which item would you like to replace? >> "))
    your_replacement = input(f"What are you replacing '{your_response}' with? >> ")
    todos[your_response - 1] = your_replacement
    print_todos(name)

def delete_todo():
    your_response = int(input(f"Which item would you like to delete? >> "))
    del todos[your_response - 1]
    print_todos(name)


def main():

    print_todos(name)
    while True:
        
        # looping through the todo list and printing them out.
        
            
        response = input(f"""Choose an action:

    P: Print your to-do list
    A: Add a to-do item
    R: Replace a to-do item
    D: Delete a to-do item

    >> """)
        if response.lower() == 'p':
           
           print_todos(name)
               
        elif response.lower() == 'a':
            add_todo()
            
        elif response.lower() == 'r':
            replace_todo()
        
        elif response.lower() == 'd':
            delete_todo()
            
        elif response == '':
            print("Goodbye.")
            break
        
        else:
            print(f"""
                '{response}' is not a valid entry, please try again.
                """)
            
main()