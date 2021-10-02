var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome!" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Welcome!" });
});

/* GET About Us page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET project page. */
router.get("/project", function (req, res, next) {
  res.render("index", { title: "project" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact" });
});

module.exports = router;
