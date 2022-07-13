
# CRUD
# my_list = []
# my_list[0]



my_dictionary = {}

#? initalize 

contacts = {
    "firstName": "Shannon", 
    "phone": "333-333-3333", 
    "city": "Phoenix", 
    "zip": 77002, 
    "isFriendly": True, 
    0: 12, 
    True: False, 
    "myList": [0, 2, 4]
}


del contacts["phone"]

print(contacts)


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

