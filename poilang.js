var fs = require('fs')
var content = fs.readFileSync('json/totally.json')
var json = JSON.parse(content)
var i

module.exports.random = () => {
  return console.log(json[Math.floor(Math.random() * json.length) - 1].j)
}

module.exports.detail = (index) => {
  if (!index && index !== 0) return console.error('No Para!')
  if (typeof index != "number" || index < 0 || index > 999) return console.error('Invalid!')
  if (index < 100) {
    i = index
  } else {
    switch (index.toString().charAt(0)) {
      case '1':
        i = index % 100 + 35
        break
      case '2':
        i = index % 100 + 54
        break
      case '3':
        i = index % 100 + 70
        break
      default:
        return console.error('Out Of Range!');
    }
  }
  if (i > json.length) return console.error('Out Of Range!')
  console.log('---Poilang---' + '\n' + '\n' + 'Index:' + json[i].i + '\n' + 'Japnese:' + json[i].j + '\n' +'Source:' + json[i].s)
}

