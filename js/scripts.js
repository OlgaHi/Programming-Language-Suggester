$(document).ready(function() {
  $("form#suggestion-form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    
    if (name.length === 0) {
      alert('Please provide your name.');
    } else if (!age > 0) {
      alert('Please provide your age.');
    } else if (answer1 === "yes") {
      $("#suggestion1").slideDown();
    } else if (answer3 === "yes" && answer4 === "yes") {
      $("#suggestion2").slideDown();
    } else { 
      $("#suggestion3").slideDown();
    };

    $(".user_name").text(name);
    $(this)[0].reset(); 
  }); 
});


