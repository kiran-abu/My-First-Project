var express = require('express');
var router = express.Router();
var config = require("../config");



router.post('/Addclicks', function(req, res){
	let uid = req.body.uid;
	config.database.collection("clicks").update({uid:uid},{
		$set:{
			uid:uid,
			keyword:'Ground Glass',
			link:'https://pulmccm.org/review-articles/management-ground-glass-subsolid-pulmonary-nodules-review/',
			modality:'CT',
			bodypart:'Chest',
			keywords:'ground glass, subsolid pulmonary nodules'
		}
	} ,{upsert : true}, function(err, result) {
		if(err){
			res.send({'error':'Database Error '+err});
		}else{
			res.send({'success':'Addclicks inserted successfully'})
		}
	});
});

//     router.get('/Login', function(req, res){
// 		let username = req.query.username;
// 	    let password = req.query.password;
// 	//res.sendFile(__dirname + '/public/views/admin/admin.html');
// 	config.database.collection("users").find({username:username,password:password}).project({"_id":0}).toArray(function(err, result) {
// 		if (err) {
// 			res.send({'error':'Updates are not able to note.'});
// 		} else {
// 			if(result.length > 0){
// 				if(result[0].status == true){
// 					if(result[0].role == 'admin'){
// 						res.send(result);
// 					}else if(result[0].role == 'user'){
// 						res.send(result);
// 					}
// 				}else{
// 					res.send({'inactive':'inactive user'});
// 				}
// 			}else{
// 				res.send({'invalid':'invalid username and password'});
// 			}
// 		}
// 	});
// });


router.post('/Login',(req,res)=>{

	//let uid=req.query.uid;
	console.log("In")
	let username = req.body.username;
	let password = req.body.password;
	config.database.collection("users").find({username:username,password:password}).project({'_id':0}).toArray(function(err,result){console.log(result);
		if(err){
			res.send({'Error':'Unable to Fetch Findings'})
		}else{
			res.send({'success':result});
		}
		console.log(result, "line:64");
	});

});






module.exports = router;