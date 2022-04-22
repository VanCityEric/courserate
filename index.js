const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;

require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
  // user: "postgres",
  // password: "kimeron123",
  // host: "localhost",
  // port: 5432,
  // database: "courses"
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));

// ROUTES //

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM entries";
  pool.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getAverages", (req, res) => {
  const sqlSelect = "SELECT * FROM average";
  pool.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/averagesinsert", async (req, res) => {
  try {
    const {
      courseName,
      courseNumber,
      courseDifficulty,
      courseWorkload,
      courseQuality,
      titleCourse,
      repeat
    } = req.body;
    const newAv = await pool.query(
      `INSERT INTO average 
      (average_name, average_number, average_avg, average_workload, average_repeat, average_title, average_difficulty)
      SELECT '${courseName}', ${courseNumber}, ${courseQuality}, ${courseWorkload}, ${repeat}, '${titleCourse}', ${courseDifficulty} 
      WHERE NOT EXISTS (SELECT 1 FROM average WHERE average_name = '${courseName}' AND average_number=${courseNumber})`
    );

    res.json(newAv.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/api/insert", async (req, res) => {
  try {
    const {
      courseName,
      courseNumber,
      courseProfessor,
      courseDifficulty,
      courseWorkload,
      courseProfRating,
      courseComments,
      courseQuality,
      courseGrade,
      tag1,
      tag2,
      tag3,
      titleCourse,
      courseYear,
      courseDay,
      courseMonth,
      courseFaculty,
      courseTime,
      thumbs
    } = req.body;
    const newEntry = await pool.query(
      `INSERT INTO entries (course_name, course_number, course_prof, course_difficulty, course_workload, course_prof_rating, course_comment, course_quality, course_grade, course_tag1, course_tag2, course_tag3, course_title, course_year, course_day, course_month, course_faculty, course_time, course_thumbs_up, course_thumbs_down) VALUES('${courseName}', ${courseNumber}, '${courseProfessor}', ${courseDifficulty}, ${courseWorkload}, ${courseProfRating}, '${courseComments}', ${courseQuality}, '${courseGrade}', '${tag1}', '${tag2}', '${tag3}', '${titleCourse}', ${courseYear}, ${courseDay}, ${courseMonth}, '${courseFaculty}', ${courseTime}, ${thumbs}, ${thumbs})`
    );

    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/api/update", async (req, res) => {
  try {
    const {
      courseName,
      courseNumber,
      courseDifficulty,
      courseWorkload,
      courseQuality
    } = req.body;
    const newUpdate = await pool.query(
      `UPDATE average SET average_repeat = average_repeat + 1, average_avg = average_avg + ${courseQuality}, average_workload = average_workload + ${courseWorkload}, average_difficulty = average_difficulty + ${courseDifficulty} WHERE average_name='${courseName}' AND average_number=${courseNumber}`
    );

    res.json(newUpdate.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/api/incrementThumbsUp", async (req, res) => {
  try {
    const { courseId, thumbsUpNumber } = req.body;
    const newUpdate = await pool.query(
      `UPDATE entries SET course_thumbs_up = course_thumbs_up + 1 WHERE entry_id = ${courseId}`
    );

    res.json(newUpdate.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
