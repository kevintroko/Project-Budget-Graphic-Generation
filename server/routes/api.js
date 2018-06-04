const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message:req.headers.authorization.split(' ')[1]
  });
  console.log("you are now at api.js");
});


module.exports = router;