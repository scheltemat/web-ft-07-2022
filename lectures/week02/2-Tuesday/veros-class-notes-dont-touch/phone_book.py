
import pickle #imports in module that allows you to export data to a .pickle file 

# reading from a file

# loading

try: 
    with open('phonebook.pickle', 'rb') as fh: 
        phonebook = pickle.load(fh)
except: 
    phonebook = {}


print(f'phonebook: {phonebook}')

phonebook['Veronica'] = "333-333-3333"




# save data from our phonebook into file

with open('phonebook.pickle', 'wb') as fh: 
    pickle.dump(phonebook, fh)