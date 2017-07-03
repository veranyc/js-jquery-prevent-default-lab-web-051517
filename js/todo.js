$(document).ready(function(){
  // call functions here
});

// define functions here

function toDoSubmit() {
  $('form').on('submit', function(event){
    var todo = $('#item').val();
    $('ol').append('<li>' + todo + '</li>');
    event.preventDefault();
  });
}
})
