const request = require('request')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const my_key = 'B569FF6CF888AB6CB16083BF33A917E3';

const basePath = 'http://api.steampowered.com/'

app.get('/', (req, res) => {
  request(basePath + '/IDOTA2Match_570/GetMatchHistory/V001/?matches_requested=2&key=' + my_key, function(error, response, body){
    if(!error && response.statusCode == 200) {
      fs.writeFile('test.txt', body, (err) => {
        if (err) {
          return console.log(err)
        }
      })
    }
  })
  console.log("I come first")
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
