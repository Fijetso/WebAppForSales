var createError = require("http-errors"),
  express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

// var MongoClient = require("mongodb").MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/cms";

// MongoClient.connect(
//   url,
//   function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   }
// );
mongoose.connect(
  url,
  { useNewUrlParser: true }
);
var dog = new mongoose.Schema({
  name: { type: String, default: "new name" },
  address: { type: String }
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin/pages");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
