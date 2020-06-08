
$(document).ready(function() {
  $('#Survey').submit(function(event) {
    event.preventDefault();
    let peopleOptions = [".Musician" , ".Actors" , ".Authors"];
    let inputOptions = [];

    inputOptions.push($("input#Musician").val());
    
    inputOptions.push($("input#Actors").val());
    
    inputOptions.push($("input#Authors").val());
  

    inputOptions.forEach(function(input, index) {
      $(peopleOptions[index]).text(input);
    })

    $("#summary").show();
  });
});

