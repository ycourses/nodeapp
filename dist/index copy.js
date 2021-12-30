import express from "express";
import bodyParser from "body-parser";
const app = express(); //post /put

app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(3000, function () {
  console.log("server is ready ...😜 @ http://localhost:3000/");
});