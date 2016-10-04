'use strict'

/*!
 * Module dependencies.
 */
 
var fs = require('fs')

var content = fs.readFileSync('json/all.json')
  , json = JSON.parse(content)
  , isChinese = false
  , isEnglish = false
  
module.exports = {
  random: (mode) => {
    if (!mode) {
      return json[Math.floor(Math.random() * json.length) - 1].l[isEnglish? 1 : (isChinese? 2 : 0)]
    } else {
      switch (mode.toUpperCase()) {
        case 'EN':
          return json[Math.floor(Math.random() * json.length) - 1].l[1]
          break
        case 'JP':
          return json[Math.floor(Math.random() * json.length) - 1].l[0]
          break
        default:
          return console.error('Invalid')
      }
    }
  },
  switch: (mode) => {
    if (!mode || typeof mode !== 'string') return console.error('Invalid')
    switch (mode.toUpperCase()) {
      case 'EN':
        isEnglish = true
        isChinese = false
        break
      case 'JP':
        isChinese = isEnglish = false
        break
      default:
        return console.error('Invalid')
    }
  },
  detail: (index) => {
    if (!index && index !== 0) return console.error('No Para!')
    if (typeof index != "number" || index < 0 || index > 999) return console.error('Invalid!')
    if (index >= 100) {
      switch (Math.floor(index / 100)) {
        case 1:
          index = index % 100 + 35
          break
        case 2:
          index = index % 100 + 54
          break
        case 3:
          index = index % 100 + 70
          break
        default:
          return console.error('Out Of Range!');
      }
    }
    if (index > json.length) return console.error('Out Of Range!')
      console.log('---Poilang---' + '\n'
      + 'Index: ' + json[index].i + '\n'
      + 'Japnese: ' + json[index].l[0] + '\n'
      + 'English: ' + json[index].l[1] + '\n'
      + 'Source: ' + json[index].s)
  }
}