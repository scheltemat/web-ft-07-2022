# Extra Challenge

#### 1. Tic-tac-toe 

Write a function `move` that accepts three arguments:

- `board` a 2-dimensional array that represents a 3x3 tic-tac-toe board
- `location` a 2-item tuple that specifies an cell on the `board`
- `player` a String, either `"X"` or `"Y"`

Return a copy of the `board` with the `player` String placed at the `location`.

Throw an error if:

- The `board` is the wrong size
- The `location` is already occupied by a player
- The `location` is invalid
- The `player` String is something other than `"X"` or `"Y"`

#### 2. Change maker

You will write a function that calculates how many bills and coins someone would receive as change.

Write a function `make_change` that accepts two arguments:

- `total_charge` - the amount of money owed
- `payment` - the amount of money payed

Return a 2-dimensional tuple whose values represent the bills and coins.

For example, consider the following tuple:

```py
(
  (3, 0, 1, 1, 0, 1), 
  (4, 1, 0, 2)
)
```

The first item represents the bills:

- 3 singles
- 0 fives
- 1 ten
- 1 twenty
- 0 fifties
- 1 hundred

The second item represents the coins

- 4 pennies
- 1 nickel
- 0 dimes
- 2 quarters


Hint: consider writing a small function to help produce the "bills" tuple and another function to help produce the "coins" tuple.

#### 3. Calculate the change value

Write a `value_of_change` function that accepts a 2-dimensional tuple like the one returned by the `make_change` function.

This function should calculate the monetary value specified by the tuple.

For example, if the following tuple were passed to `value_of_change`

```py
(
  (3, 0, 1, 1, 0, 1), 
  (4, 1, 0, 2)
)
```

It would return `133.59`

As before, consider writing helper functions to deal with the bills and the coins separately.
