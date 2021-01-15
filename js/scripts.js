$(document).ready(function() {
  $("form#suggestion-form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const answer1 = $("input:radio[name=option]:checked").val();
    console.log(answer1)
  }); 
});