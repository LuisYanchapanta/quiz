/* global $ */
$(document).ready(function() {
    $("#clicker").click(function() {
        var name = $("#name").val();
        var finalAnswer = 'Your Person from "The Office" is...';
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $("#word").text(answer(totalScore));
        $("#clicker").hide();
    });
    function questionOne(q1Result){
        if (q1Result === "Weak"){
            return 1;
        }
        else if (q1Result === "Listen"){
            return 2;
        }
        else if (q1Result === "Walk"){
            return 3;
        }
        else if (q1Result === "Laugh"){
            return 3;
        }
    }
    function questionTwo(q2Result){
        if (q2Result === "Nothing"){
            return 1;
        }
        else if (q2Result === "Chasing"){
            return 2;
        }
        else if (q2Result === "Embarrass"){
            return 3;
        }
        else if (q2Result === "Give up everything"){
            return 4;
        }
    }
    function questionThree(q3Result){
        if (q3Result=== "Nerd"){
            return 1;
        }
        else if (q3Result==="Jock"){
            return 2;
        }
        else if (q3Result==="Clown") {
            return 3;
        }  
        else if (q3Result==="Weirdo") {
            return 3;
        }
        else if (q3Result==="Shy") {
            return 4;
        }
    }
  function answer(totalScore){
      var imgSrc;
      if (totalScore == 3){
          imgSrc="data:image/jpeg;base64,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";
          $("#ending").attr("src",imgSrc);
          return "You are Dwight Schrute!";
      }
     else if (totalScore > 3 && totalScore <=  6){
         imgSrc="https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg";
         $("#ending").attr("src",imgSrc);
          return "You are Jim Halpert!";
     }
     else if(totalScore > 6 && totalScore <  9){
         imgSrc="data:image/jpeg;base64,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";
         $("#ending").attr("src",imgSrc);
         return "You are Michael Scott!";
     }
     else if(totalScore >= 9){
         imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Pam_Beesley.jpg/220px-Pam_Beesley.jpg";
         $("#ending").attr("src",imgSrc);
         return "You are Pam !";
     }
     else return "Wrong Input, Try Again!";
  }
});