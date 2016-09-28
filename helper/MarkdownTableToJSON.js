var fs = require('fs')
fs.readFile('source.md', 'utf8', (err,data) => {
  var json = '['
		if (err) return console.log(err)
		data = data.replace(/[\r\n]/g, '|')
		console.log(data);
		var arr = data.split('|')
		if (arr.length % 3 !== 0) {
			console.log('TypeError')
			return
		} else {
			for (var i = 0; i < arr.length - 3; i+=3) {
				json += '{"i":"' + arr[i] + '","j":"' + arr[i+1] + '","s":"' + arr[i+2] + '"},'
			}
			json = json.substr(0, json.length - 1) + ']'
			fs.writeFile('out.json', json, (err) => {
				if (err) console.log(err)
			})
		}
});
