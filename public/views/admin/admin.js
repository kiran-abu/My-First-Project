
$(document).ready(function(){

    $(document).on('click','#listallusers',function(){
 
        $.ajax({
            type:'POST',
            url:config.baseURL+"admin/listAllUsers",
            data:{},
            success:function(data){	
                if(data.hasOwnProperty('success')){
                    //console.log(data['success']);
                    var allusers=data['success'];
                    var temp="";
                    temp = temp + "</br></br><table class='table table-bordered'><tr><th>UID</th><th>Username</th><th>Password</th><th>role</th><th>Status</th></tr>"
                    for(each in allusers){
                        temp=temp+"<tr>"+"<td>"+allusers[each].uid+"</td>";
                        temp = temp +"<td>"+allusers[each].username+"</td>";
                        temp=temp+"<td>"+allusers[each].password+"</td>";
                        temp=temp+"<td>"+allusers[each].role+"</td>";
                        temp=temp+"<td>"+allusers[each].status+"</td></tr>"
                    }
                    temp = temp + "</table>"
                    $("#AllClicks").html("");
                    $("#AllUsers").html(temp)

                }else if(data.hasOwnProperty('error')){
                    alert("Database Error");
                }
            }
        });
    })   
    
    $(document).on('click','#listallclicks',function(){
 
        $.ajax({
            type:'POST',
            url:config.baseURL+"admin/listAllClicks",
            data:{},
            success:function(data){	
                if(data.hasOwnProperty('success')){
                    //console.log(data['success']);
                    var allclicks=data['success'];
                   
                    var temp="";
                    temp = temp + "</br><table class='table table-bordered'><tr><th>uid</th><th>keyword</th><th>bodypart</th><th>link</th><th>modality</th><th>keywords</th></tr>"
                   
                    for(each in allclicks){
                        var uid=allclicks[each].uid;
                        var keyword=allclicks[each].keyword;
                        var bodypart=allclicks[each].bodypart;
                        var link=allclicks[each].link;
                        var modality=allclicks[each].modality;
                        var keywords=allclicks[each].keywords;

                        temp=temp+"<tr><td>"+uid+"</td>"
                        temp=temp+"<td>"+keyword+"</td>"
                        temp=temp+"<td>"+bodypart+"</td>"
                        temp=temp+"<td>"+link+"</td>"
                        temp=temp+"<td>"+modality+"</td>"
                        temp=temp+"<td>"+keywords+"</td></tr>"
                      

                    }
                    
                    temp = temp + "</table>"
                    $("#AllUsers").html("");
                   $("#AllClicks").html(temp)

                }else if(data.hasOwnProperty('error')){
                    alert("Database Error");
                }
            }
        });
    }) ;


    





});