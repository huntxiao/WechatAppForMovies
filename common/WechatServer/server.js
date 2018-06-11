const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const request = require('request');
const server = express();

// console.log(movie.subjects[0].images)
//连接数据库
// var mydb = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'root',
// 	port:3306,
// 	database:'douban'
// });
// mydb.connect();
// mydb.query('SET NAMES UTF8');
// server.use(bodyParser.urlencoded({extended:false}));
// server.post('/login',function(req,res){
// 	// console.log(req.body);
// 	var loginSql = 'SELECT username,passwd FROM userinfo WHERE username=? AND passwd=?';
// 	var dataList = [req.body.username,req.body.passwd];
// 	mydb.query(loginSql,dataList,function(err,data){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			if(data.username == req.body.username && data.passwd == req.body.passwd){
// 				res.send({'r':'success'});
// 			}else{
// 				res.send({'r':'fail'});
// 			}
// 		}
// 	});
// });
server.get('/hot',function(req,res){
	var hot = 'http://api.douban.com/v2/movie/in_theaters';
	request(hot,function(err,response,body){
		var bodyo = JSON.parse(body);
		res.send(bodyo);
	})
});
server.get('/coming',function(req,res){
	var hot = 'http://api.douban.com/v2/movie/coming_soon';
	request(hot,function(err,response,body){
		var bodyo = JSON.parse(body);
		res.send(bodyo);
	})
});
server.get('/hotxq',function(req,res){
		console.log(req.query.id)
		var xq= 'http://api.douban.com/v2/movie/'+req.query.id;
		request(xq,function(err,response,body){
			var bodyo = JSON.parse(body);
			res.send(bodyo);
			console.log(bodyo)
		})
		// var details = [];
		// movie.subjects[0].
		// res.end();
	})
server.listen('8080');