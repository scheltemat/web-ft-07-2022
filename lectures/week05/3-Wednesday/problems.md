
#  Fibonacci Sequence 
The Fibonacci numbers are the numbers in the following integer sequence.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

`Fn = Fn-1 + Fn-2`

with seed values

F0 = 0 and F1 = 1.

Write a function called fib to determine the fibanacci sequence of n integers

i.e. 

fib(10)

**What is the big O of your solution**

# Using reduce, determine the number of desks that are sitting and the number that are standing.

your solution should look like:  {sitting:3, standing: 2}

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
  
  var deskTypes = desks.reduce(function() {
      
  }, { sitting: 0, standing: 0 });

# Sum the multiples

If we list all the natural numbers below 30 that are multiples of 7 or 11, we get 7, 11, 14 and 21 and 28. The sum of these multiples is 81.

Using python write figure out how you could find and return the sum of all the multiples of 7 or 11 below 1000.

**What is the big O of your solution** 

# Bubble Sort

Write an application which applies the bubble sort algorithm to sort a list/array of numbers.

Your app should start with an integer array similar to this:

numbers = [2,1,45,67,89,4,5,7,9]

After applying bubble sort you will end up with the sorted array.

[1,2,4,5,7,9,45,67,89] (Ascending Order)

You can also sort the array in decending order as shown below:

[89,67,45,9,7,5,4,2,1]

Hint: You may need two loops to perform bubble sort

Here is a link to understand bubble sort https://www.geeksforgeeks.org/bubble-sort/

