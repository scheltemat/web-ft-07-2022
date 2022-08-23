
INSERT INTO student VALUES (

  'Joy', 'joyhe@dc.com', 'joyhe@github.com', 10, 'F', '2022-07-05', FALSE
);

-- INSERT INTO student VALUES 

--     ('Christian', 'christian@dc.com', 'christian@github.com', 10, 'F', '2022-07-05', FALSE),
--     ('Dan', 'dan@dc.com', 'dan@github.com', 10, 'M', '2022-07-05', FALSE),
--     ('Nomi', 'Nomi@dc.com', 'Nomi@github.com', 10, 'M', '2022-07-05', FALSE),
--     ('Tommy', 'Tommy@dc.com', 'Tommy@github.com', 10, 'M', '2022-07-05', FALSE);

-- UPDATE student SET gender = 'M' WHERE name = 'Christian'

-- UPDATE student SET points = 8;

-- UPDATE student SET points = 20 WHERE name = 'Joy';

-- UPDATE student SET points = 15 WHERE gender = 'M';

-- DELETE FROM student WHERE name = 'Christian';

-- DELETE FROM student WHERE gender = 'M';



-- CREATE TABLE blogs (
--     id SERIAL NOT NULL PRIMARY KEY, 
--     title varchar(150),
--     start_date DATE,
--     isVisible BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO blogs VALUES 
-- (DEFAULT, 'js is awesome', '2022-08-22', TRUE),
-- (DEFAULT, 'learning node', '2022-08-22', TRUE),
-- (DEFAULT, 'installing postgres on macs', '2022-08-22', TRUE),
-- (DEFAULT, 'installing postgres on PCs', '2022-08-22', TRUE),
-- (DEFAULT, 'Google APIs', '2022-08-22', TRUE);

-- DELETE FROM blogs WHERE id = 5;

-- INSERT INTO blogs VALUES (DEFAULT, 'Google Apis', '2022-08-21');

-- SELECT * FROM student WHERE gender = 'M';

-- SELECT * FROM student WHERE points >= 20;

-- SELECT name, points FROM student WHERE points >= 20;

-- SELECT
-- *
-- FROM
--     student
-- WHERE
--     github_username LIKE '%an%';

-- ALTER TABLE blogs
-- ADD isPublished boolean DEFAULT TRUE;

-- ALTER TABLE blogs
-- DROP COLUMN isVisible; 

-- ALTER TABLE blogs ALTER COLUMN title TYPE varchar(30);

-- SELECT COUNT(*), SUM(points), AVG(points), MIN(points), MAX(points) FROM student;

-- SELECT * FROM student ORDER BY points DESC, name ASC;

-- SELECT * FROM student ORDER BY gender LIMIT 5 OFFSET 1 * 5

-- DROP TABLE restaurant;

-- CREATE TABLE restaurant (
--     1
--     name varchar,
--     distance integer, 
--     stars integer,
--     category varchar,
--     favorite_dish varchar,
--     does_takeout boolean, 
--     last_time_you_ate_there date
-- );