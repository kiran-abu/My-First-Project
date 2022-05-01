var express = require('express');
var router = express.Router();
var config = require("../config");


router.post('/listAllUsers', function(req, res){
	config.database.collection("users").find({status:true}).project({'_id':0}).toArray(function(err,result){
		if(err){
			res.send({'error':'Database Error '+err});
		}else{
			res.send({'success':result});
            
		}
	});
});

router.post('/listAllClicks', function(req, res){
	config.database.collection("clicks").find({}).project({'_id':0}).toArray(function(err,result){
		if(err){
			res.send({'error':'Database Error '+err});
		}else{
			res.send({'success':result});
            
		}
	});
});


module.exports = router;