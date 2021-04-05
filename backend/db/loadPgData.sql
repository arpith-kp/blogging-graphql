
DROP TABLE if exists post_vote;
DROP TABLE if exists post;
DROP TABLE if exists users;


CREATE TABLE users (
  id serial primary key,
  first_name VARCHAR(50) NULL DEFAULT NULL,
  last_name VARCHAR(50) NULL DEFAULT NULL,
  email VARCHAR(50) NULL,
  created_at timestamp not null default current_timestamp,
  token_id varchar(128) not null unique
  );

CREATE TABLE post (
  id serial primary key,
  author_id BIGINT REFERENCES users NOT NULL,
  title VARCHAR(75) NOT NULL,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp,
  content TEXT NULL DEFAULT NULL
  );


CREATE TABLE post_vote (
  id serial primary key,
  post_id BIGINT REFERENCES post NOT NULL,
  author_id BIGINT REFERENCES users  NOT NULL,
  up boolean not null,
  created_at timestamp not null default current_timestamp
  );

INSERT INTO "users" ("email","first_name","last_name","token_id")
VALUES
(E'arpith@gmail.com',E'Arpith',E'Prakash',E'2222'),
(E'ajay@hotmail.com',E'Ajay',E'Raj',E'1111');


INSERT INTO "post" ("author_id", "title", "content")
VALUES
(E'1',E'Python',E'Python is an interpreted, high-level and general-purpose programming language. '),
(E'2',E'Java',E'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible ');


INSERT INTO "post_vote" ("post_id", "author_id", "up")
VALUES
(E'1', '1', TRUE),
(E'2', '1', FALSE),
(E'2', '2', TRUE);