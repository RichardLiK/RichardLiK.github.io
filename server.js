var http = require("http");
var parse = require("url").parse;
var join = require("path").join;
var fs = require("fs");

var root = __dirname;
//console.log(root);//这个是本地的路径比如 D:\myhomepage\singlePageProject\myFirstProject\RichardLiK.github.io\public


function sendFile(res, req){
	var url = parse(req.url);
	var path = join(root, url.pathname);
	// console.log('url:' + req.url);
	// console.log('pathname:' + url.pathname);
	if (url.pathname=='/') {
		// statement
		path = path + 'public/index.html';
		// console.log(path);
	}
	fs.stat(path,function (err,stat) {
		/* body... */
		if (err) {
			// statement
			if ('ENOENT' == err.code) {
				// statement
				res.statusCode=404;
				res.end('Not Found');
			} else {
				// statement
				res.statusCode=500;
				res.end('Internal Server Error');
			}
		} else {
			// statement
			res.setHeader('Content-Length',stat.size);
			var stream = fs.createReadStream(path);
			//这部分stream只能搞一个路径，读完后就关了。。。。不能调用其它文件的函数，不然会报错，需要加一个url的判断p21
			// stream.on('data',function(chunk){
			// 	res.write(chunk);
			// });
			// stream.on('end',function () {
			// 	res.end();
			// });
			stream.pipe(res);
			stream.on('error',function (err) {
			/* body... */
			res.statusCode = 500;
			res.end('Internal Server Error');
		});
		}
		
	});
}

function routeDoWith(req, res){

}


var server = http.createServer(function(req, res){
	//var filename;
	sendFile(res, req);
	
	
	
	// req.on('data',function(chunk){
	// 	filename = chunk + ".html"
	// });
	//res.end(filename);
	
});
server.listen(3030,function(){
	console.log('server is running on http://127.0.0.1:3030');
})