-- INSERT INTO restaurant VALUES 
-- (DEFAULT, 'Olive Garden', 10, 3, 'italian', 'breadsticks', TRUE, '2022-01-01'),
-- (DEFAULT, 'Torchys', 5, 4, 'tacos', 'democrat', FALSE, '2022-02-01'),
-- (DEFAULT, 'Franks Grill', 4, 3, 'diner', 'nothing', FALSE, '2022-03-01'),
-- (DEFAULT, 'Outback Steakhouse', 15, 4, 'steakhouse', 'ribeye', TRUE, '2022-04-01'),
-- (DEFAULT, 'Pappas BBQ', 12, 4, 'BBQ', 'chopped beef sandwich', TRUE, '2022-05-01'),
-- (DEFAULT, 'Raising Canes', 2, 4, 'fast food', 'box combo', TRUE, '2022-06-01'),
-- (DEFAULT, 'Garden of Olives', 9, 5, 'italian', 'lasagna', TRUE, '2022-07-01'),
-- (DEFAULT, 'Flaming Tacos', 5, 5, 'tacos', 'steak taco', FALSE, '2022-08-01'),
-- (DEFAULT, 'Chucks Grill', 7, 3, 'diner', 'meatloaf', FALSE, '2022-09-01'),
-- (DEFAULT, 'Salt Grass Steakhouse', 4, 5, 'steakhouse', 'NY strip', TRUE, '2022-10-01'),
-- (DEFAULT, 'Hidaway BBQ', 5, 5, 'BBQ', 'sausage', TRUE, '2022-11-01'),
-- (DEFAULT, 'Chick-fil-a', 3, 3, 'fast food', 'spicy chicken sandwich', TRUE, '2022-12-01');



-- SELECT * FROM restaurant WHERE stars = 5

-- SELECT name, stars, favorite_dish  FROM restaurant WHERE stars = 5

-- SELECT id FROM restaurant WHERE name = 'Torchys'

-- SELECT name FROM restaurant WHERE category = 'BBQ'

-- SELECT name FROM restaurant WHERE does_takeout = 'true'

-- SELECT name FROM restaurant where does_takeout = 'true' and category = 'BBQ'

-- SELECT name FROM restaurant where distance <= 2

-- SELECT name from restaurant WHERE last_time_you_ate_there < '2022-08-17'

-- SELECT name from restaurant WHERE last_time_you_ate_there < '2022-08-17' AND stars = 5

-- SELECT name, distance FROM restaurant ORDER BY distance;

-- SELECT name, distance FROM restaurant ORDER BY distance DESC LIMIT 2

-- SELECT name, stars FROM restaurant ORDER BY stars DESC LIMIT 2

SELECT * FROM restaurant WHERE distance <= 2 ORDER BY stars LIMIT 2

-- SELECT COUNT(*) FROM restaurant

-- SELECT COUNT(*), category FROM restaurant GROUP BY category

-- SELECT COUNT(*), AVG(stars), category FROM restaurant GROUP BY category

-- SELECT COUNT(*), MAX(stars), category FROM restaurant GROUP BY category