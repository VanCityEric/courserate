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
    course_time INT
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