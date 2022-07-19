

# chloe =  {
#     "firstName" : "Chloe", 
#     "city": "London"
# }

# tri = {
#     "firstName" : "Tri", 
#     "city": "Philly"
# }

# tri["city"]

# class Student:  # class / blueprint
#     def __init__(self, fName, my_city): # constructor
#         # print("I'm a constructor and I was just callsed")
#         self.firstName = fName
#         self.city = my_city
    
#     def greeting(self): 
        
#         print(f'hello {self.firstName}, how is the weather in {self.city}')  # hello chloe, how is the weather in london? 
    

# student1 = Student("chloe", "london")  # creating and instance of the Student class 
# student2 = Student("tri", "philly")

# print(student1.firstName)
# print(student1.greeting())
# print(student2.greeting())
# print(student2.firstName)

# student1 is an object

# student1.greeting()

# print(student1)

# student2 = Student()  # student2 another object of the STudent class 
# print(student2)


# clicked = 0  # global variable
# def button_click(): 
#     clicked +=1 
    



# button_click()
# button_click()

# print(clicked)
    
    
# class Button: 
#     # constructor 
#     def __init__(self): 
#         self.count = 0 
        
        
#     # methods 
#     def handle_click(self): 
#         self.count +=1 
#         print(f'num of clicks is {self.count}')

# navButton = Button()
# helpButton = Button() 
# contactUsButton = Button()

# navButton.handle_click()
# navButton.handle_click()
# navButton.handle_click()
# navButton.handle_click()

# helpButton.handle_click()
# helpButton.handle_click()


# contactUsButton.handle_click()

# navButton.handle_click()
# helpButton.handle_click()
# contactUsButton.handle_click()


# class Area: 
    
#     pi = 3.14 
    
#     def circle(r):
#         return  r * r 
    
# result = Area.circle(3)


# class Calulus: 
    
#     def integration(): 
#         pass 
    
#     def differenitaion() :
#         pass 
    
# import pickle   

# Calculus.integration()
# print(result)


# class Area: 
    
#     PI = 3.14
    
#     def __init__(self, name): 
#         self.name = name
        
#     def print_name(self):
#         print(f'I am a {self.name} pi={Area.PI}')
        

# circle = Area('circle')

# print(circle.PI)
# circle.print_name()

# square = Area('square') 
# print(square.PI)

# square.print_name()


# class Area: 
#     __PI = 3.14 #private
    
#     def __init__(self, name): 
#         self.name = name
        
        
#     # methods 
#     # print pi
#     def print_pi(self):
#         print(self.__PI) 
    
    
# circle = Area("circle")

# circle.__PI = 5 

# circle.print_pi() 


# class Test: 
#     def __init__(self):
#         self.__a = "a"
#         self._b = 'b'
    

# t = Test() 
# t._b = 5
# print(t._b)

# t.__a = 6
# # print(t.__a)


# class Animal:
#   def __init__ (self, name):
#     self.name = name
    
#   def who_am_i(self):
#       print(f'{self.name}')
    
# class Dog (Animal):
#   def woof (self):
#     print("Woof")
    
# class Cat (Animal):
#   def meow (self):
#     print("Meow")
    
    
# fido = Dog("fido")
# fido.woof()
# fido.who_am_i()


# list str int dict 

# name = "Kipp"

# print(name.upper())

# class VeroString(str): 
    
#     def __init__(self, word): 
#         self.word = word # hello 
        
        
#     def reverse(self): 
#         revString = ""
#         for char in self.word: 
#             revString = char + revString 
        
#         return revString
    

# someString = VeroString('hello')

# print(someString.upper())
# print(someString.reverse().upper())



# class Car: 
#     def __init__(self, make, model, color): 
#         self.make = make 
#         self.model = model 
#         self.color = color 
    
#     def carDetails(self): 
#         print(f"Here are the details of this car {self.make} {self.model} {self.color}")

# class Hybrid(Car): 
#     def __init__(self, make, model, color, year):
#         self.year = year
#         print("i'm in the hybrid consturctor")
#         super(Hybrid, self).__init__(make, model, color)
    
#     def carType(self): 
#         print(f"I am a hybrid car {self.make} {self.model} {self.color}")

# class Electric(Car): 
#     def carType(self): 
#         print(f"I am an electric car {self.make} {self.model} {self.color}")

# prius = Hybrid("toyota", "prius", "lime green", "1999")

# prius.carDetails()
# # prius.carType()

# tesla = Electric("tesla", "model-s", "purple") 
# tesla.carDetails()
# tesla.carType()

# class Parent(): 
    
#     def implicit(self):
#         print("implict")
    
#     def override(self):
#         print('Parent Override') 

# class Child(Parent): 
    
#     def override(self): 
#         print("Child Override")
#         super(Child, self).override()
    


# willSmith = Parent() 
# willSmith.implicit()

# jadenSmith = Child()
# jadenSmith.implicit()
# jadenSmith.override()

# first_name 


class Campus: 
    def __init__(self): 
        self.students = [] #hold all of or student instances  [obj, obj, obj, ]
        #                                                                 |    
    
    def addStudent(self, name, city):
        # create an instance of student
        studentObj = Student(name, city)
        
        # add student instnance to self.students
        self.students.append(studentObj) 
        
    def printStudentNames(self): 
        for student in self.students: 
            print(student.firstName)
    
    def numOfStudents(self):
        return len(self.students)
        
        
class Student: 
    def __init__(self, firstName, campus): 
        self.firstName = firstName 
        self.campus = campus 
        
        
    def printStudent(self):
        print(f'{self.firstName} {self.campus}')
        
        

dc = Campus()

dc.addStudent('Tommy', "New Jersey")
dc.addStudent('Ryan', 'Kawlona') 
dc.addStudent('Shannon', "Phoenix")
dc.addStudent('Austin', "Bay") 
dc.addStudent('Joy', "Houston")
dc.addStudent('Dan', "Chicago")
dc.addStudent('Peyton', "Houston")
dc.addStudent('Yvonne', "New Braunfels")

# print(dc.students)

dc.printStudentNames()
print(dc.numOfStudents())



# student1 = Student('Dane', "Tampa")
# student2 = Student('Veronica', 'Orlando')
# student3 = Student('Tri', "Philly")
# student4 = Student('Felipe', "Houston")
# student5 = Student('Gary', "Atlanta")


# Bank (class)
    # properties
        # name 
        # address 
        # list all of account holders
    #methods
        # add an account holder to the account_holders list
        # searchBy Name
        # total bank balance 
        # see all of our members 
        # hightest account holder 
        
# Account
    # name 
    # balance