const request = require('request')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const my_key = 'B569FF6CF888AB6CB16083BF33A917E3';

const basePath = 'http://api.steampowered.com/'
const getMatchHistoryPath = "/IDOTA2Match_570/GetMatchHistory/v1/"

app.get('/matches', (req, res) => {
  console.log('GET-ting matches...')
  request(basePath + getMatchHistoryPath + '?matches_requested=10&game_mode=1&min_players=10&key=' + my_key, (error, response, body) => {
    var obj_body = JSON.parse(body)
    if(!error && response.statusCode == 200 && obj_body['result']['status'] === 1) {
      fs.writeFile('test.txt', body, (err) => {
        if (err) {
          return console.log(err)
        }
      })
    }
  })
  res.send('Working on it...')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Oops, ERROR!', err)
  }

  console.log(`Listening on ${port}`)
})

function didItWork(){
  return "Let's begin..."
}


module.exports.didItWork = didItWork;
