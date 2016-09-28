var fs = require('fs')
var content = fs.readFileSync('json/totally.json')
var json = JSON.parse(content)

var random = () => {
  var i =  Math.floor(Math.random() * json.length) - 1
  console.log('---Poilang---')
  console.log('Index:' + json[i].i)
  console.log('Japnese:' + json[i].j)
  console.log('Source:' + json[i].s)
}

module.exports.random  = random;