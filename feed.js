$( document ).ready(function() {
	
var myfeedToken = "EAACEdEose0cBAAaOvYUI2rDPbyiZAJwmQlVWjGaTu8Y4lBlXA3r1UTDu2zKjDqCjgud4N3iOv5tZCJnwqDfRwYGzyEZAfYKmbjYPUYqkwG8Al8doRlh8yO0OP32gsp2HSPwcsGNZAweeuSqxVwH4DMW99x88wVU15Plg0LrTBZCmZBO8BCyGCdkw2ZC53TTGZCVZBN7J5oKYDpgZDZDsafdsf";

function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=feed&access_token='+myfeedToken,{
                type: "GET",
                success : function(response){
                	$(".feed").show();
                	$(".profile").hide();
                    console.log(response);
                     if(response.feed.data.length) {
                     	for(var i in response.feed.data) {
                     		if(response.feed.data[i].story != "undefined" && response.feed.data[i].story != "null") {
                     			$("#feed1").text(response.feed.data[0].story);
                     			$("#feed2").text(response.feed.data[1].story);
                     			$("#feed3").text(response.feed.data[2].story);
                     			$("#feed4").text(response.feed.data[3].story);
                     			$("#feed5").text(response.feed.data[4].story);
                     			$("#feed6").text(response.feed.data[5].story);
                     		}
                     	}
 
                    }
                }, 
                error : function(xhr, status, error) {
                console.log(xhr.responseJSON.error.message);
                alert("An error occured! \n" + xhr.responseJSON.error.message);
            }  
        });
    }// end get facebook info

    $("#feedBtn").on('click',getFacebookInfo);



  });
