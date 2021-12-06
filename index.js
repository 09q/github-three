const request = require('request');
const colors = require('colors')

function letrinhas() {
	let nickzinhu = '';
	let abc123 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for(var i = 0; i < 3; i++) {
		nickzinhu = nickzinhu + abc123.charAt(Math.floor(Math.random() * abc123.length));
	}
	//console.log(nickzinhu)

request(`https://github.com/${nickzinhu}`, (error, res, body) => {
	//console.log(body)
	if(res.statusCode == 200) {
		console.log('[.]'.brightBlue + ` ${nickzinhu} Unavailable`.grey) // :dddd
	} else {
		console.log('[+]'.brightGreen + ` ${nickzinhu} Available - [ github.com/${nickzinhu} ]`.white)
	}
	})
}

setInterval(() => letrinhas(), 4500)
