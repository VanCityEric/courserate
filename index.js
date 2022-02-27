const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 3001;

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

app.post("/api/averagesinsert", (req, res) => {
  const averageName = req.body.averageName;
  const averageNumber = req.body.averageNumber;
  const averageAvg = req.body.averageAvg;
  const averageWorkload = req.body.averageWorkload;
  const averageRepeat = req.body.averageRepeat;
  const averageProf = req.body.averageProf;
  const averageTitle = req.body.averageTitle;
  const averageDifficulty = req.body.averageDifficulty;

  const sqlInsert = `INSERT INTO average 
  (
    average_name,
    average_number,
    average_avg,
    average_workload,
    average_repeat,
    average_prof,
    average_title,
    average_difficulty

  ) SELECT 
    '${averageName}',
    ${averageNumber},
    ${averageAvg},
    ${averageWorkload},
    ${averageRepeat},
    '${averageProf}',
    '${averageTitle}',
    ${averageDifficulty}
    WHERE NOT EXISTS (
      SELECT 1 FROM average WHERE average_name='${averageName}' AND average_number=${averageNumber}
    )
   

  `;
  pool.query(sqlInsert, (err, result) => {
    console.log(err);
  });
});

app.post("/api/insert", (req, res) => {
  const courseName = req.body.courseName;
  const courseNumber = req.body.courseNumber;
  const courseProf = req.body.courseProf;
  const courseDifficulty = req.body.courseDifficulty;
  const courseWorkload = req.body.courseWorkload;
  const courseProfRating = req.body.courseProfRating;
  const courseComment = req.body.courseComment;
  const courseQuality = req.body.courseQuality;
  const courseGrade = req.body.courseGrade;
  const courseTag1 = req.body.courseTag1;
  const courseTag2 = req.body.courseTag2;
  const courseTag3 = req.body.courseTag3;
  const courseTitle = req.body.courseTitle;
  const courseYear = req.body.courseYear;
  const courseDay = req.body.courseDay;
  const courseMonth = req.body.courseMonth;
  const courseTime = req.body.courseTime;
  const courseFaculty = req.body.courseFaculty;

  const sqlInsert = `INSERT INTO entries 
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
    '${courseName}', 
    ${courseNumber}, 
    '${courseProf}', 
    ${courseDifficulty},
    ${courseWorkload},
    ${courseProfRating},
    '${courseComment}',
    ${courseQuality},
    '${courseGrade}',
    '${courseTag1}',
    '${courseTag2}',
    '${courseTag3}',
    '${courseTitle}',
    ${courseYear},
    ${courseDay},
    ${courseMonth},
    ${courseTime},
    '${courseFaculty}'

  )`;
  pool.query(sqlInsert, (err, result) => {
    console.log(err);
  });
});

app.post("/api/update", (req, res) => {
  const updateName = req.body.updateName;
  const updateNumber = req.body.updateNumber;
  const updateAvg = req.body.updateAvg;
  const updateWorkload = req.body.updateWorkload;
  const updateDifficulty = req.body.updateDifficulty;
  const sqlUpdate = `UPDATE average SET average_repeat = average_repeat + 1, average_avg = average_avg + ${updateAvg}, average_workload = average_workload + ${updateWorkload}, average_difficulty = average_difficulty + ${updateDifficulty} WHERE average_name='${updateName}' AND average_number=${updateNumber}`;
  pool.query(sqlUpdate, (err, result) => {
    console.log(err);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
