const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();

router.get('/',(req,res)=> res.render('welcome'));

module.exports = router;
