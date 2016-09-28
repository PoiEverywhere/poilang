var fs = require('fs')
fs.readFile('source.md', 'utf8', (err, data) => {
  var json = '['
		if (err) return console.log(err)
		data = data.replace(/[\r\n]/g, '|')
		console.log(data);
		var arr = data.split('|')
    var languageArr
		if (arr.length % 3 !== 0) {
			return console.error('TypeError')
		} else {
			for (var i = 0; i < arr.length - 3; i += 3) {
        languageArr = arr[i+1].split('<br>')
				json += '{"i":"' + arr[i] + '","j":"' + languageArr[0] + '","e":"' + languageArr[1] + '","s":"' + arr[i+2] + '"},'
			}
			json = json.substr(0, json.length - 1) + ']'
			fs.writeFile('out.json', json, (err) => {
				if (err) console.log(err)
			})
		}
})