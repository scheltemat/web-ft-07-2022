


# def power(base, exponent): 
    
#     # base case
#     if exponent == 0: 
#         return 1
    
#     result = base * power(base,  exponent - 1)
#     return result 
    
    
    
# # callstack
# power(4, 0) => 1
# power(4, 1) => 4 * 1 => 4
# power(4, 2) => 4 * 4 => 16
# power(4, 3) => 4 * 16 = 64


# 4 = 4 *3 * 2 * 1 * 0    0! = 1  4! = 4 * 3 * 2 * 1 *1

# 1 * 2 * 3 * 4 


# def factorial(n): 
    
#     if (n == 0):
#         return 1 
    
#     return n * factorial(n-1)

# factorial(0) => 1
# factorial(1) => 1 * 1
# factorial(2) => 2 * 1
# factoiral(3) => 3 * 2
# factorial(4) => 4 * 6 = 24
    
# 4 + 3 + 2 + 1 + 0

# def recursiveRange(n):
    
#     if n == 0: 
#         return 0
    
#     return  n + recursiveRange(n - 1)

#  hello   => olleh
#       |
# def reverse(word): 
    
#     #base
#     if(len(word) == 0):
#         return ''
    
#     return reverse(word[1:]) + word[0]

# result = reverse('hello')
# print(result)
# reverse("") => ""
# reverse("o") =>  ""  + 'o' => 'o'
# reverse("lo") =>  'o' + 'l' => 'ol'
# reverse("llo") =>  'ol' + 'l' => 'oll'
# reverse("ello") => 'oll' + 'e' => 'olle'
# reverse('hello') => 'olle' + "h" => 'olleh'


# word = "hello"
# rev_str = ""
# index = 0

# while index < len(word):
#      rev_str =  rev_str + word[index] # 
#      index+=1

# bn|nb
#    


# t a c o c a t 
#      | |

# a c o c a

# c o c

# o 


def isPalindrome(word):
    
    # base 
    if(len(word) == 1):
        return true 
    if(len(word) == 2):
        return word[0] == word[1]
    
    #recurse 
   if word[0] == word[-1]: 
       return isPalindrome(word[1:-1])
    
    return false


isPalindrome("o") => true
isPalindrome("coc") => isPalindrome("o") => true
isPalindrome("acoca") => isPalindrome("coc") => true
isPalindrome("tacocat") => isPalindrome("acoca") => true


# word = "tacocat"

# new_word = word[1:-1]
# print(new_word)
        
    