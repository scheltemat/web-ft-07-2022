
# Create a variable called first_name and set the value to your first name
first_name = "Thomas"
# create a variable called last_name and set the value to your last name
last_name = "Scheltema"
# print your first name console
print(first_name)
# print your last name to the console
print(last_name)
# Create a new varaiable called my_name and set the value to the concatenation of your first name and your last name 
my_name = first_name + " " + last_name
# print "My name is ???" out to the console.  Substitue the ??? with the my_name variable.
print(f'My name is {my_name}')
# create a variable called company_name and set the value to "DigitalCrafts"
company_name = "DigitalCrafts"

# Using the two variables you set earlier, generate a company email address that follows the pattern: "first name, period, last name @ company domain". Assign the result to a new variable called email and print the email to the console.
# harry.potter@DigitalCrafts.com
email = f"{first_name}.{last_name}@{company_name}.com"
print(email)

# Using the firstname and lastname variables, generate a username to a new variable and print it to the console. The username should follow this format: first name, underscore, lastname.
# harry_potter
username = first_name + "_" + last_name

# Using all the information you have created, print the data in a nice format. That is, generate a "Contact Card" style output that looks better than just printing values.

# Welcome to DigitalCrafts, Harry Potter!
# Email: harry.potter@DigitalCrafts.com
# Username: harry_potter
print(f"""
Welcome to {company_name}, {my_name}!
Email: {email}
Username: {username}
""")
