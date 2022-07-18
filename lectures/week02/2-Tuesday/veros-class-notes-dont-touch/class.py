
# CRUD
# my_list = []
# my_list[0]

# my_dictionary = {}

# #? initalize 

# contacts = {
#     "firstName": "Shannon", 
#     "phone": "333-333-3333", 
#     "city": "Phoenix", 
#     "zip": 77002, 
#     "isFriendly": True, 
#     0: 12, 
#     True: False, 
#     "myList": [0, 2, 4],
#     'some_dictionary': {"cell": "333-333-3333"}
# }

# result = contacts["myList"][1]

# print(result)

# del contacts["phone"]

# print(contacts)


# keys = contacts.keys()  # sequence - tuple 

# print(keys)

# for key in contacts.keys(): 
#     print(f"{key} : {contacts[key]}")


# values = contacts.values() # sequence - tuple 

# print(values)
# contacts["state"] = "Arizona"
# contacts["firstName"] = "Tommy"

# print(contacts)


# result = "state" in contacts # True or False

# if "firstName" in contacts: 
#     print(contacts["firstName"])

# result = contacts["state"]
# result = contacts.get("state")
# result = contacts["city"]
# result = contacts[0]

# print(result)

# [{}, {}]
contact = [
    {
        'first_name': 'Phillip',
        'last_name': 'Guo',
        'email': 'phillip.guo@gmail.com',
        'phone':{
            'work':'837-494-3948',
            'cell': '234-897-4933'
        }
    },
    {
        'first_name': 'Mark',
        'last_name': 'Guzdial',
        'email': 'mark.guzdial@gatech.edu',
        'phone':{
            'work':'484-569-3466',
            'cell': '493-485-9845'
        }
    }
]


result = contact[0]['phone']['cell']

print(result)