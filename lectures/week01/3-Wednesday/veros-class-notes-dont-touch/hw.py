
height = int(input('Enter a height >> '))

count = 0 
stars = 1

base_width = height * 2 - 1

while count <  height : 
    star = '*' * stars
    count +=1 # count = count + 1
    stars +=2 # stars = stars + 2 
    print(star.center(base_width))