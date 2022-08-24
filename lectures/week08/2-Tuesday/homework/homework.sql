
-- CREATE TABLE restaurant (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     address varchar, 
--     category varchar
-- );

-- CREATE TABLE reviewer (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar, 
--     email varchar,
--     karma integer check (karma between 0 and 7)
-- );

-- CREATE TABLE review (
--     id SERIAL NOT NULL PRIMARY KEY,
--     reviewer_id integer references reviewer(id),
--     stars integer check (stars between 0 and 5),
--     title varchar,
--     review varchar, 
--     restaurant_id integer references restaurant(id)
-- );


-- INSERT INTO restaurant VALUES 
-- (DEFAULT, 'Olive Garden', '1234 Almond St Houston TX', 'Italian'),
-- (DEFAULT, 'Torchys', '2341 Peanut St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Franks Grill', '3412 Walnut Bend Houston TX', 'American'),
-- (DEFAULT, 'Outback Steakhouse', '4123 Pecan Rd Houston TX',  'American'),
-- (DEFAULT, 'Pappas BBQ', '4123 Beanwi Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Raising Canes', '3124 Pelbri Rd Houston TX', 'Fried Chicken'),
-- (DEFAULT, 'Garden of Olives', '1231 Groot St Houston TX', 'Italian'),
-- (DEFAULT, 'Flaming Tacos', '2342 Ole St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Chucks Grill', '3413 Latrick Bend Houston TX', 'American'),
-- (DEFAULT, 'Salt Grass Steakhouse', '4124 Shuum Rd Houston TX',  'American'),
-- (DEFAULT, 'Hidaway BBQ', '4125 Swantro Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Chick-fil-a', '3126 Helm Rd Houston TX', 'Fried Chicken');

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Karen', 'tookaren@hotmail.com', 2),
-- (DEFAULT, 'Billy', 'billywilly@hotmail.com', 3),
-- (DEFAULT, 'Bobby', 'bobbynewport@hotmail.com', 0),
-- (DEFAULT, 'Samantha', 'sam185@hotmail.com', 7),
-- (DEFAULT, 'Krieg', 'psychokrieg@hotmail.com', 1),
-- (DEFAULT, 'Charles', 'charleschuck@hotmail.com', 4),
-- (DEFAULT, 'Matt', 'magicmatt@hotmail.com', 6),
-- (DEFAULT, 'Rick', 'rick@hotmail.com', 5);

-- INSERT INTO review VALUES
-- (DEFAULT, 1, 1, 'Sooo Rude...', 'The employees were so rude to me.', 1),
-- (DEFAULT, 2, 3.5, 'Great Food', 'Food was good, atmosphere was OK', 2),
-- (DEFAULT, 3, 5, 'It was OK', 'It was OK. Food was not too great', 3),
-- (DEFAULT, 4, 2.5, 'Kinda Rude', 'Food was great. Employees were kinda rude.', 4),
-- (DEFAULT, 5, 4.5, 'Amazing', 'The food was sooo good. I have to go again.', 5),
-- (DEFAULT, 6, 3.5, 'Not my style but good food.', 'Atmosphere was not for me but the food was good.', 6),
-- (DEFAULT, 7, 4, 'Slow service', 'Service was slow but food was good when we got it.', 7),
-- (DEFAULT, 8, 3, 'Great Experience', 'Food was great and employees were so nice.', 8),
-- (DEFAULT, 1, 2.5, 'Would not go again', 'Restaurant was dirty and employees were rude. Food was OK.', 9),
-- (DEFAULT, 2, 2, 'Have to go again.', 'Great food. Wonderfull experience and atmosphere.', 10),
-- (DEFAULT, 3, 5, 'Why???', 'My only complaint is that this restaurant is on the other side of town.', 11),
-- (DEFAULT, 4, 4, 'How much food can you eat', 'Food was great. Portions were big.', 12),
-- (DEFAULT, 5, 3, 'Could not eat another bite', 'I was so full when I left. Gotta go again.', 1),
-- (DEFAULT, 6, 1, 'Not my cup of tea', 'They did not have my kind of tea.', 2),
-- (DEFAULT, 7, 2, 'Very very rude', 'Employee at the cashier yelled at me. Food was OK.', 3),
-- (DEFAULT, 8, 1.5, 'Not very good', 'Food and atmosphere was not very good.', 4);


--! - List all the reviews for a given restaurant given a specific restaurant ID.

-- SELECT * 
-- FROM 
--     review
-- INNER JOIN
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- WHERE
--     restaurant.id = 1


--! - List all the reviews for a given restaurant, given a specific restaurant name.

-- SELECT * 
-- FROM 
--     review
-- INNER JOIN
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- WHERE
--     restaurant.name = 'Torchys'

--! - List all the reviews for a given reviewer, given a specific author name.

-- SELECT * 
-- FROM 
--     review
-- INNER JOIN
--     reviewer
-- ON
--     review.reviewer_id = reviewer_id
-- WHERE
--     reviewer.name = 'Karen'
    
--! - List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.

-- SELECT restaurant.name, review.review
-- FROM
--     review
-- INNER JOIN
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- WHERE
--     restaurant.name = 'Torchys';
    
--! - Get the average stars by restaurant. The result should have the restaurant name and its average star rating.

-- SELECT restaurant.name, AVG(stars)
-- FROM
--     review
-- INNER JOIN
--     restaurant
-- ON  
--     review.restaurant_id = restaurant.id
-- GROUP BY
--     restaurant.name

--! - Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.

-- SELECT restaurant.name, COUNT(review.review)
-- FROM
--     review
-- INNER JOIN
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- GROUP BY
--     restaurant.name

--! - List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.

-- SELECT restaurant.name, review.review, reviewer.name
-- FROM
--     review
-- INNER JOIN 
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- INNER JOIN
--     reviewer
-- ON  
--     review.reviewer_id = reviewer.id
-- ORDER BY
--     restaurant.name

--! - Get the average stars given by each reviewer. (reviewer name, average star rating)

-- SELECT reviewer.name, AVG(stars) as "avg rating"
-- FROM
--     review
-- INNER JOIN
--     reviewer
-- ON
--     review.reviewer_id = reviewer.id
-- GROUP BY
--     reviewer.name

--! - Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)

-- SELECT reviewer.name, MIN(stars) as "min rating"
-- FROM
--     review
-- INNER JOIN
--     reviewer
-- ON
--     review.reviewer_id = reviewer.id
-- GROUP BY
--     reviewer.name

--! - Get the number of restaurants in each category. (category name, restaurant count)

-- SELECT restaurant.category, COUNT(restaurant.name)
-- FROM
--     restaurant
-- GROUP BY
--     restaurant.category

--! - Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)

-- SELECT restaurant.name, COUNT(stars) as "No. of 5 star reviews"
-- FROM
--     review
-- INNER JOIN
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- WHERE
--     stars = 5
-- GROUP BY 
--     restaurant.name

--! - Get the average star rating for a food category. (category name, average star rating)

-- SELECT restaurant.category, AVG(stars)
-- FROM
--     review
-- INNER JOIN
--     restaurant
-- ON
--     review.restaurant_id = restaurant.id
-- GROUP BY
--     restaurant.category