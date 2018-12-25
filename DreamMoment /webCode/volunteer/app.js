var express = require("express");
var app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
var nodemailer = require('nodemailer');
app.use(express.static(__dirname + '/public'));
var peopleNumber=0



app.get('/volunteer', function(req, res) {
     res.sendfile('./volunteer.html');

 });
app.get('/volunteerSecond', function(req, res) {
     res.sendfile('./volunteerSecond.html');
     
 });
 app.get('/volunteerThird', function(req, res) {
     res.sendfile('./volunteerThird.html');
 });

 app.get('/compition', function(req, res) {
     res.sendfile('./compition.html');
 });
app.get('/culture', function(req, res) {
     res.sendfile('./culture.html');
 });
app.get('/donation', function(req, res) {
     res.sendfile('./donation.html');
 });
app.get('/learn', function(req, res) {
     res.sendfile('./learn.html');
 });
app.get('/main', function(req, res) {
     res.sendfile('./main.html');
 });

app.post("/volunteerThird", urlencodedParser, function(req, res) {
  var target = req.body.email;
  console.log('email:%s',target);
  var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'sora910321@gmail.com',
	    pass: 'zllktuftoslvphov'
	  }
	});

	var mailOptions = {
	  from: 'sora910321@gmail.com',
	  to: target,
	  subject: 'DreamMoment 活動',
	  html: '<h2>恭喜你報名成功！！</h2> <p>以下是您報名的基本資料，如有錯誤請再回覆給我們，若活動有什麼異動我們將會再通知您。</p>'
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	})
	peopleNumber++;
	
	res.sendfile('./Fourth.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// 'fokchamhin1999@yahoo.com.hk'