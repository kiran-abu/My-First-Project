$(function () {

	// Check browser support
	if (typeof(Storage) !== "undefined") {
		
		var alreadyExits = localStorage.getItem("xrayapp");
		if(alreadyExits==null || alreadyExits=="undefined"){
			var item = {"allowed":false};
			
			localStorage.setItem("xrayapp", JSON.stringify(item));
		} 
	   
	} 

	setCredentials = function(username, password,uid){
		
		var item = {"username":username, "password":password,"allowed":true,"uid":uid};
		localStorage.setItem("xrayapp", JSON.stringify(item));
		
	}

	getCredentials = function(){
		var item ;
		try {
			item = JSON.parse(localStorage.getItem("xrayapp"));
		} catch (e) {
			item = localStorage.getItem("xrayapp");
		}
		
		var user = item["allowed"];
		
		if(user!=null && user!="undefined")
			return user;
		else
			return false;
	}
	
	clearCredentials = function(){
		localStorage.setItem("xrayapp", {});
	}

});
