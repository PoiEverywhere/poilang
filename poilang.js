var fs = require('fs')
  , content = fs.readFileSync('json/all.json')
  , json = JSON.parse(content)
  , i
  , isChinese = false
  , isEnglish = false

module.exports.random = () => {
  return console.log(json[Math.floor(Math.random() * json.length) - 1].l[isEnglish ? 1 : (isChinese? 2 : 0)])
}

module.exports.detail = (index) => {
  if (!index && index !== 0) return console.error('No Para!')
  if (typeof index != "number" || index < 0 || index > 999) return console.error('Invalid!')
  if (index < 100) {
    i = index
  } else {
    switch (index.charAt(0)) {
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
  console.log('---Poilang---' + '\n' + 'Index:' + json[i].i + '\n' + 'Japnese:' + json[i].j[0] + '\n' +'Source:' + json[i].s)
}

module.exports.switch = (mode) => {
  if (!mode || typeof mode != 'string') return console.error('Invalid')
  switch (mode.toUpperCase()) {
    // case 'CH':
    //   isChinese = true
    //   isEnglish = false
    //   break
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
}