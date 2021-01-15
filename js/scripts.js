$(document).ready(function() {
  $("form#suggestion-form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();

    $(".user_name").text(name);
    if (age > 10 && answer2 === "yes") {
      $("#suggestion1").show();
    } else if (answer1 === "yes" || answer2 === "yes" ){
      $("#suggestion2").show();
    } else {
      $("#suggestion3").show();
    }

    $(".user_name").text(name);
    $(this)[0].reset(); 

    
  }); 
});


