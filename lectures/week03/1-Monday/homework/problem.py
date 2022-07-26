

# 1. Determine the total distance travelled and the
# total time it takes to get there by summing up
# the total distance and the total time in the list below

trips = [
    { "distance": 34, "time": 10 },
    { "distance": 90, "time": 50 },
    { "distance": 59, "time": 25 },
    { "distance": 83, "time": 60 },
    { "distance": 27, "time": 15 },
    { "distance": 68, "time": 90 }
]

sum_distance = 0
sum_time = 0
for i in trips:
    sum_distance += i["distance"]
    sum_time += i["time"]

print("distance", sum_time)
print(sum_distance)    
    
    

# 2. Implement a 'pluck' function. 
# Pluck should accept a list and a string representing a 
# property name and return a list containing that property from each object.

paints = [{"color": 'red', "text-align": "right"}, {"color": 'blue', "margin": "0px"}, {"color": 'yellow', "padding": "5px"}]
# pluck(paints, 'color')
# returns =>>>>> ['red', 'blue', 'yellow']

def pluck(list, string):
    new_list = []
    for i in range(len(list)):
        new_list.append(list[i][string])
    
    print(new_list)
pluck(paints, "color")
        