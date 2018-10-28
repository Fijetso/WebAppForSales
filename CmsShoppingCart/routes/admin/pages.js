var express = require("express"),
  router = express.Router();
var pages = [];

/* GET pages */
router.get("/pages", function(req, res, next) {
  res.render("admin/pages/pages");
});

router.get("/pages/add", function(req, res, next) {
  res.render("admin/pages/add_page");
});
router.post("/pages", function(req, res, next) {
  var addPage = [];
  addPage.push({
    title: req.body.pageTitle,
    slug: req.body.pageSlug,
    content: req.body.pageContent
  });
  console.log(addPage);
  res.redirect("pages");
});
module.exports = router;
