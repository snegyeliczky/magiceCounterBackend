const fs = require('fs');
const path = require('path')
const express = require('express');
const {promisify} = require("util");
const router = express.Router();

const jsonFile = path.resolve('./','db.json');
const readFile =promisify(fs.readFile)

router.get('/', async (req, res, next) => {
  const readiedFile = await readFile(jsonFile)
  const parsed = JSON.parse(readiedFile)
  res.send(parsed);
});

module.exports = router;
