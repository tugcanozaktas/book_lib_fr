/* Initialize DB with some seed data */
USE `book_lib_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO Readers (name, genre, email, password)
VALUES ("John Smith", "Horror", "johnsmith@gmail.com", "smithsmith12");
INSERT INTO Readers (name, genre, email, password)
VALUES ("Kate Mar", "Novel", "katemar@gmail.com", "marmar12");
INSERT INTO Readers (name, genre, email, password)
VALUES ("James Luce", "Romantic", "jamesluce@gmail.com", "luceluce12");

INSERT INTO Book (ISBN, title, author, genre )
VALUES (1526617161, "Court of Mist and Fury", "Sarah J. Maas", "Philosophical");
INSERT INTO Book (ISBN, title, author, genre )
VALUES (9022543129, "Een Hoed Van Lucht", "Terry Pratchett", "Fantasy");
INSERT INTO Book (ISBN, title, author, genre )
VALUES (0375751548, "Swann's way", "Marcel Proust", "Novel");
INSERT INTO Book (ISBN, title, author, genre )
VALUES (0553381687, "A Game of Thrones", "George R. R. Martin", "Exploratory");
