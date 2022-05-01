
$(document).ready(function(){


$(document).on('click','#post',function(){
    $("#clearforButtons").html("");

    var template=$("#Post-temp").html();
    $("#clearforButtons").append(template);
   
});


$(document).on('click','#get',function(){
    $("#clearforButtons").html("");
});


$(document).on('click','#addclick',function(){
    $("#addclickDiv").html("");

    var template=$("#AddClick-temp").html();
    $("#addclickDiv").append(template);

});

$(document).on('click','#addfield',function(){
    var temp=$("#AddClick-temp").html();
  $(temp).appendTo("#AddNew");
});














	

	
});
