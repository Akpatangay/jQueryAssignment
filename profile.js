 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
    $(".feed").hide();
    var myFacebookToken = 'EAACEdEose0cBALgqYh19ZC5A92fq7R2aUE9AeYK6ovhSg9Flo1SNTRJxqFztAICNZB2LlLD0eTd6jCQUUt3lSgsD4F7YVlNyBiK1RWFPXvPs1PXQH8x6ldx9yCaufxmZBVYpFnZC5Q1o6HscqZBGTuT9be64DNlFyAZBywfY4eAUkHpT2RUUtf88HgS3Yes2FskfhfWGdG7QZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=id,name,about,posts,birthday,email,hometown,gender,languages&access_token='+myFacebookToken,{
            type: "GET",
            success : function(response){
                var languagesStr = '';
                console.log(response);
                $(".profile").show();
                $(".feed").hide();
                console.log(typeof(response));
                $("#myName").text(response.name);
                $("#myGender").text(response.gender);
                $("#myEmail").text(response.email);
                $("#myBirthday").text(response.birthday);
                $("#myHometown").text(response.hometown.name);
                if(response.languages.length) {
                    for(var i in response.languages) {
                        if(parseInt(i) === response.languages.length-1) {
                            languagesStr += response.languages[i].name;
                         } else {
                            languagesStr += response.languages[i].name + ", ";
                         }
                    }
                } else {
                    languagesStr = response.languages.name;
                }
                $("#myLanguages").text(languagesStr);
            },
            error : function(xhr, status, error) {
                console.log(xhr.responseJSON.error.message);
                alert("An error occured! \n" +xhr.responseJSON.error.message);
            }

        });


    }// end get facebook info

    $("#profileBtn").on('click',getFacebookInfo);



  });