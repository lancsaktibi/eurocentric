// import npm apps
const express = require("express");
const router = express.Router();

// AUTH ROUTES: (Registration / Login / Logout)
// .. CREATE / Display Form
// .. CREATE / Submit Form
// .. READ / Logout

// READ / Home Page
router.get("/", (req, res) => res.render("landing.ejs"));

module.exports = router;