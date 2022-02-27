CREATE DATABASE courses;

CREATE TABLE entries(
    entry_id SERIAL PRIMARY KEY, 
    course_name VARCHAR(255),
    course_number INT,
    course_prof VARCHAR(255),
    course_difficulty INT,
    course_workload INT,
    course_prof_rating INT,
    course_comment VARCHAR(255),
    course_quality INT,
    course_grade VARCHAR(255),
    course_tag1 VARCHAR(255),
    course_tag2 VARCHAR(255),
    course_tag3 VARCHAR(255),
    course_title VARCHAR(255),
    course_year INT,
    course_day INT,
    course_month INT,
    course_time INT, 
    course_faculty VARCHAR(255)
);

CREATE TABLE average(
    average_id SERIAL PRIMARY KEY, 
    average_name VARCHAR(255),
    average_number INT,
    average_avg INT,
    average_workload INT,
    average_repeat INT,
    average_prof VARCHAR(255),
    average_title VARCHAR(255)
);

INSERT INTO entries 
  (
    course_name, 
    course_number, 
    course_prof, 
    course_difficulty,
    course_workload,
    course_prof_rating,
    course_comment,
    course_quality,
    course_grade,
    course_tag1,
    course_tag2,
    course_tag3,
    course_title,
    course_year,
    course_day,
    course_month,
    course_time,
    course_faculty
  )
  VALUES
  (
    'MACM', 
    201, 
    'Natasha', 
    3,
    4,
    5,
    'LOVEEE',
    5,
    'A+',
    '#Feel',
    '#GE',
    '#CHA',
    'MACM 201',
    2022,
    29,
    3,
    0192838475,
    'Communications'

  );