const fs = require('fs')
var prepend = require('prepend');
const fileContents = fs.readFileSync('./english.txt').toString().toLowerCase()
const words = fileContents.split('\n')
const express = require('express')
const app = express()

function getword(string) {
    let result = []
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if (element.includes(string)) {
            // check how much things are in result
            if (result.length < 10) {
                result.push(element)
            }
        }
    }
    return result
}
app.get('/getword', function (req, res) {
    res.send(getword(req.query.word))
  })
  
app.listen(80)