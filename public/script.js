
	$(document).ready(function(){
		//$("#login-page-template").template("login-page-template");
		//$.tmpl("login-page-template").appendTo("#appview");
		var user = localStorage.getItem("xrayapp");
		if(user){
			user = JSON.parse(user);
			$("#loginusername").val(user.username);
			$("#loginpassword").val(user.password);
			$("#login").trigger("click");
			// console.log(user.username);
			// console.log(user.password)
		}else {
			$("#login").trigger("click");
		}
		//console.log(user);
		//$(document).off('click', '#login');
		$(document).on('click', '#login', function(e){
			e.preventDefault();
    		e.stopPropagation();
			let username = $("#loginusername").val();
			let password = $("#loginpassword").val();
			$.ajax({ 
				type: 'POST',
				url: config.baseURL + "login",
				data: {username:username, password:password},
				success: function (data) {
					if(data.hasOwnProperty('invalid')){
						alert(data['invalid']);
					}else if(data.hasOwnProperty('inactive')){
						alert(data['inactive'])
					}else{
						// let new_data = JSON.parse(data);
						//console.log(new_data);
						console.log(data)
						$('#appview').html(data);
						setCredentials(username, password);
					}
				}
			});
		});
	})
