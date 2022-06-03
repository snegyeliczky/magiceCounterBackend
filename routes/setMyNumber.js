const fs = require('fs');
const path = require('path')
const express = require('express');
const {promisify} = require("util");

const router = express.Router();

const jsonFile = path.resolve('./','db.json');
const writeFile =promisify(fs.writeFile)

router.post('/', async (req, res, next) => {
    const newNumber = req.body;
    await writeFile(jsonFile, JSON.stringify(newNumber,null,2));
    res.send(newNumber);
});

module.exports = router;