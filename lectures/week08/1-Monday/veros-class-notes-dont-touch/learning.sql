
-- CREATE TABLE student (
  
--   	name varchar(25),
--   	website varchar,
--   	github_username varchar, 
--   	points integer, 
--   	gender char(1), 
--   	cohort_start_date date, 
--   	graduated boolean
  
--   );

-- INSERT INTO student VALUES (
--     'Joy', 'Joy@dc.com', 'Joy@github.com', 10, 'F', '2022-07-05', FALSE 
-- );

-- INSERT INTO student VALUES 
--     ('Shannon', 'Shannon@dc.com', 'Shannon@github.com', 10, 'F', '2022-07-05', FALSE), 
--     ('Dan', 'Dan@dc.com', 'Dan@github.com', 10, 'M', '2022-07-05', FALSE), 
--     ('Christian', 'Christian@dc.com', 'Christian@github.com', 10, 'M', '2022-07-05', FALSE), 
--     ('Nomi', 'Nomi@dc.com', 'Nomi@github.com', 10, 'M', '2022-07-05', FALSE), 
--     ('Yvonne', 'Yvonne@dc.com', 'Yvonne@github.com', 10, 'F', '2022-07-05', FALSE), 
--     ('Tommy', 'Tommy@dc.com', 'Tommy@github.com', 10, 'M', '2022-07-05', FALSE), 
--     ('Thomas', 'Thomas@dc.com', 'Thomas@github.com', 10, 'M', '2022-07-05', FALSE), 
--     ('Ryan', 'Ryan@dc.com', 'Ryan@github.com', 10, 'M', '2022-07-05', FALSE), 
--     ('Austin', 'Austin@dc.com', 'Austin@github.com', 10, 'M', '2022-07-05', FALSE);

-- UPDATE student SET points = 8;

-- UPDATE student SET points = 20  WHERE name = 'Joy' OR name = 'Christian' OR name = 'Yvonne';

-- UPDATE student  SET points = 15 WHERE gender = 'M';


-- DELETE FROM student;

-- DELETE FROM  student WHERE name='Austin';

-- DELETE FROM student WHERE gender='M';

-- CREATE TABLE blogs (
--     id SERIAL NOT NULL PRIMARY KEY, 
--     title varchar(150), 
--     start_date DATE, 
--     isVisible BOOLEAN DEFAULT FALSE
-- );



-- INSERT INTO blogs VALUES
-- (DEFAULT, 'js is awesome', '2022-08-22', TRUE),
-- (DEFAULT, 'learning node', '2022-08-22', TRUE),
-- (DEFAULT, 'installing Postgres on Macs', '2022-08-22', TRUE),
-- (DEFAULT, 'installin Postgre on PCs', '2022-08-22', TRUE),
-- (DEFAULT, 'Goolge APIs', '2022-08-22', TRUE);


-- DELETE FROM blogs WHERE id=5;

-- INSERT INTO blogs VALUES  (DEFAULT, 'google apis', TRUE);

-- SELECT * FROM blogs;

-- SELECT title, start_date FROM blogs;

-- SELECT * FROM student WHERE gender='F';
-- SELECT * FROM student WHERE points >= 20;
-- SELECT name, points, gender FROM student WHERE points = 10 AND gender='F';

-- SELECT 
--     * 
-- FROM
--     student 
-- WHERE 
--     github_username ilike '%AN%';

-- ALTER TABLE blogs 
-- ADD isPublished boolean DEFAULT TRUE;

-- ALTER TABLE blogs 
-- DROP COLUMN isVisible;


-- ALTER TABLE blogs ALTER COLUMN title TYPE varchar(30);

-- SELECT COUNT(*), SUM(points), AVG(points), MIN(points), MAX(points) FROM student;

-- SELECT * FROM student ORDER BY name DESC;
SELECT * FROM student ORDER  BY gender LIMIT 5 OFFSET 10;
-- SELECT * FROM student ORDER BY points DESC, name ASC;







