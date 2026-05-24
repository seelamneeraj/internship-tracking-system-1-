const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { initializeDB } = require("./db");

const internshipRoutes = require("./routes/internships");
const taskRoutes = require("./routes/tasks");
const submissionRoutes = require("./routes/submissions");
const evaluationRoutes = require("./routes/evaluations");
const dashboardRoutes = require("./routes/dashboard");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/internships", internshipRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Internship Tracking API Running");
});

const PORT = 5000;

initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});