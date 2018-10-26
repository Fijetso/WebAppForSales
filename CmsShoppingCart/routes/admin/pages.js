var express = require("express");
var router = express.Router();
require("jsdom").env("", function(err, window) {
  if (err) {
    console.error(err);
    return;
  }

  var $ = require("jquery")(window);
});

$(".tabPages").addClass("active");

/* GET pages */
router.get("/pages", function(req, res, next) {
  res.render("admin/pages/pages");
});

router.get("/pages/add", function(req, res, next) {
  res.render("admin/pages/add_page");
});

module.exports = router;
